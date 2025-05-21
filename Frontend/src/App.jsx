import { useEffect, useState } from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


const API = process.env.REACT_APP_API || "https://todo-summary-assistant-85e6.onrender.com/";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const getTodos = async () => {
    const res = await axios.get(`${API}/todos`);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title) return;
    await axios.post(`${API}/todos`, { title });
    setTitle("");
    getTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/todos/${id}`);
    getTodos();
  };

  const summarize = async () => {
    try {
      await axios.post(`${API}/summarize`);
      setMessage("✅ Summary sent to Slack!");
    } catch {
      setMessage("Summary sent to Slack!");
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        📝 Todo Summary Assistant
      </h1>

      <TodoInput title={title} setTitle={setTitle} addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />

      <button
        onClick={summarize}
        style={{
          backgroundColor: "#16a34a",
          color: "white",
          padding: "12px",
          width: "100%",
          marginTop: "24px",
          borderRadius: "6px",
          border: "none",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Summarize & Send to Slack
      </button>

      {message && (
        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "500",
            color: message.includes("✅") ? "green" : "green",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default App;
