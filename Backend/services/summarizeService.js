const supabase = require('../supabaseClient');
const axios = require('axios');
const { sendToSlack } = require('../utils/slack');

exports.summarizeAndSend = async (req, res) => {
  try {
    
    const { data: todos, error } = await supabase.from('todos').select('*');
    if (error) throw new Error(error.message);

    if (!todos || todos.length === 0) {
      return res.status(404).json({ error: 'No todos found.' });
    }

    
    const pendingTitles = todos.map(todo => `- ${todo.title}`).join('\n');
    const prompt = `Summarize the following todos:\n${pendingTitles}`;

    
    const openaiResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const summary = openaiResponse.data.choices[0].message.content.trim();

    
    await sendToSlack(summary);

    
    res.status(200).json({ success: true, summary });

  } catch (err) {
    console.error('Error in summarizeAndSend:', err.message);
    res.status(500).json({ error: 'Failed to summarize or send to Slack.' });
  }
};
