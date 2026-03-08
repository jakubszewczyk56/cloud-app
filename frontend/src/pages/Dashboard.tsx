import { useEffect, useState } from "react";
import api from "../services/api";

type Task = {
  id: number;
  title: string;
  description?: string;
  isDone: boolean;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/tasks")
      .then((response) => {
        setTasks(response.data);
        setError("");
      })
      .catch(() => {
        setError("Nie udało się pobrać danych z API");
      });
  }, []);

  return (
    <div style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1>Cloud Task Manager</h1>
      <h2>Lista zadań</h2>

      {error && <p>{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            {task.description ? ` - ${task.description}` : ""}
            {task.isDone ? " [DONE]" : " [TODO]"}
          </li>
        ))}
      </ul>
    </div>
  );
}