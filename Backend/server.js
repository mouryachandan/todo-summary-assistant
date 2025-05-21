const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');  // Rate limiter import
dotenv.config();

const supabase = require('./supabaseClient'); // Import your supabase client

const app = express();
app.use(cors());
app.use(express.json());

const todoRoutes = require('./routes/todoRoutes');

// Rate limiting सेटअप: 1 मिनट में 5 रिक्वेस्ट की लिमिट
const limiter = rateLimit({
  windowMs: 60 * 1000,  // 1 minute
  max: 5,
  message: "बहुत ज्यादा रिक्वेस्ट्स, कृपया कुछ समय बाद पुनः प्रयास करें।"
});

// todoRoutes में summarize route पर limiter लगाओ
// इसलिए, हम पहले limiter को apply करेंगे फिर routes को use करेंगे
app.use('/summarize', limiter);

app.use('/', todoRoutes);

const PORT = process.env.PORT || 5000;

// Supabase connection test function
async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('todos').select('*').limit(1);
    if (error) {
      console.error('Supabase connection test failed:', error.message);
    } else {
      console.log('Supabase connected successfully. Sample data:', data);
    }
  } catch (err) {
    console.error('Unexpected error during Supabase connection test:', err.message);
  }
}

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await testSupabaseConnection(); 
});
