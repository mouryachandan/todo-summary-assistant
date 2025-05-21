# Todo Summary Assistant

A full-stack application where users can:

- Create, edit, and delete personal to-do items.
- Generate a summary of all pending to-dos using a real LLM (OpenAI).
- Send the generated summary to a Slack channel using Slack Incoming Webhooks.

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js (Express)
- **Database:** Supabase (PostgreSQL)
- **LLM:** OpenAI API
- **Notification:** Slack Incoming Webhook

---

## Features

- Add, edit, and delete to-do items
- View list of current to-dos
- Generate a summary of all pending tasks using OpenAI
- Send the summary to a Slack channel
- Show success/failure status for Slack operation

---

## Project Structure

```
todo-summary-assistant/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── .env.example
├── frontend/
│   ├── src/
│   ├── public/
│   └── .env.example
├── README.md
```

---

## Getting Started

### Step 1: Clone the repository

```bash
git clone https://github.com/yourusername/todo-summary-assistant.git
cd todo-summary-assistant
```

---

## Backend Setup (Node.js + Express)

### Install dependencies

```bash
cd backend
npm install
```

### Create a `.env` file

```bash
cp .env.example .env
```

### Fill in the `.env` with your actual keys:

```env
PORT=5000
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-service-role-key
OPENAI_API_KEY=your-openai-api-key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your-webhook-url
```

### Run the backend server

```bash
npm start
```

The server will run on `http://localhost:5000`

---

## Frontend Setup (React)

### Install dependencies

```bash
cd ../frontend
npm install
```

### Create `.env` file

```bash
cp .env.example .env
```

### Fill in the `.env` file

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

### Run the frontend

```bash
npm start
```

---

## Supabase Setup

1. Go to [https://supabase.com](https://supabase.com) and create a new project.
2. Create a table named `todos` with fields:
   - `id` (uuid, primary key)
   - `title` (text)
   - `completed` (boolean)
3. Get your `SUPABASE_URL` and `SUPABASE_KEY` from project settings.
4. Add them to your backend `.env`.

---

## OpenAI Setup

2. Generate a new API key.
3. Add it in your backend `.env` as `OPENAI_API_KEY`.

---

## Slack Webhook Setup

1. Go to [https://api.slack.com/messaging/webhooks](https://api.slack.com/messaging/webhooks)
2. Select your workspace, create a new webhook, and choose the channel.
3. Copy the generated Webhook URL.
4. Paste it in your `.env` as `SLACK_WEBHOOK_URL`.

---

## API Endpoints

| Method | Endpoint        | Description                    |
|--------|------------------|--------------------------------|
| GET    | /todos           | Fetch all todos                |
| POST   | /todos           | Add a new todo                 |
| DELETE | /todos/:id       | Delete a todo by ID            |
| POST   | /summarize       | Summarize todos & send to Slack|

---

## Deployment 

- **Frontend:** Deploy using Vercel
- **Backend:** Deploy using Render

---

## Live Demo 

Frontend:https://todo-summary-assistant-orcin.vercel.app/
Backend:

---

## Author

**Chandan Kumar**  
Full Stack Internship Assignment – Todo Summary Assistant

---

## License

This project is licensed under the MIT License.
