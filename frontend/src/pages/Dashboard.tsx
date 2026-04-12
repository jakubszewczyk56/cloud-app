import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import "../App.css";

type Task = {
  id: number;
  title: string;
  description?: string;
  isDone: boolean;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [workingTaskId, setWorkingTaskId] = useState<number | null>(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch {
      setError("Nie udało się pobrać danych z API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!title.trim()) return;

    try {
      setSubmitting(true);
      setError("");

      await api.post("/tasks", {
        title: title.trim(),
        description: description.trim() || title.trim(),
        isDone: false,
      });

      setTitle("");
      setDescription("");
      await fetchTasks();
    } catch {
      setError("Nie udało się dodać zadania.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleTask = async (task: Task) => {
    try {
      setWorkingTaskId(task.id);
      setError("");

      await api.put(`/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        isDone: !task.isDone,
      });

      await fetchTasks();
    } catch {
      setError("Nie udało się zaktualizować zadania.");
    } finally {
      setWorkingTaskId(null);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      setWorkingTaskId(id);
      setError("");

      await api.delete(`/tasks/${id}`);
      await fetchTasks();
    } catch {
      setError("Nie udało się usunąć zadania.");
    } finally {
      setWorkingTaskId(null);
    }
  };

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((task) => task.isDone).length;
    const todo = total - done;

    return { total, done, todo };
  }, [tasks]);

  return (
    <div className="page">
      <div className="center-wrap">
        <header className="hero">
          <p className="eyebrow">Cloud Project • Azure Deployment</p>
          <h1>Cloud Task Manager</h1>
          <p className="hero-text">
            Aplikacja do zarządzania zadaniami oparta o React, .NET i Azure SQL.
          </p>

          <button className="secondary-btn" onClick={fetchTasks}>
            Odśwież listę
          </button>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Wszystkie zadania</span>
            <strong>{stats.total}</strong>
          </div>

          <div className="stat-card">
            <span className="stat-label">Do zrobienia</span>
            <strong>{stats.todo}</strong>
          </div>

          <div className="stat-card">
            <span className="stat-label">Wykonane</span>
            <strong>{stats.done}</strong>
          </div>
        </section>

        <section className="panel">
          <h2>Dodaj nowe zadanie</h2>
          <p className="section-subtitle">
            Uzupełnij tytuł i opcjonalny opis zadania.
          </p>

          <div className="form-grid">
            <input
              type="text"
              placeholder="Tytuł zadania..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Opis zadania..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              className="primary-btn"
              onClick={handleAddTask}
              disabled={submitting}
            >
              {submitting ? "Dodawanie..." : "Dodaj rekord"}
            </button>
          </div>
        </section>

        <section className="panel">
          <div className="section-header">
            <div>
              <h2>Lista zadań</h2>
              <p className="section-subtitle">
                Zadania zapisane w bazie danych Azure SQL.
              </p>
            </div>
            <span className="task-counter">{stats.total} rekordów</span>
          </div>

          {loading ? (
            <p className="info-text">Ładowanie danych...</p>
          ) : error ? (
            <div className="error-box">{error}</div>
          ) : tasks.length === 0 ? (
            <div className="empty-state">
              <p>Brak zadań do wyświetlenia.</p>
              <span>Dodaj pierwsze zadanie, aby rozpocząć pracę.</span>
            </div>
          ) : (
            <div className="task-grid">
              {tasks.map((task) => (
                <article key={task.id} className="task-card">
                  <div className="task-card-top">
                    <span className="task-id">#{task.id}</span>
                    <span className={task.isDone ? "badge done" : "badge todo"}>
                      {task.isDone ? "DONE" : "TODO"}
                    </span>
                  </div>

                  <div>
                    <h3>{task.title}</h3>
                    <p>{task.description || "Brak opisu zadania."}</p>
                  </div>

                  <div className="task-actions">
                    <button
                      className="small-btn outline-btn"
                      onClick={() => handleToggleTask(task)}
                      disabled={workingTaskId === task.id}
                    >
                      {task.isDone ? "Cofnij" : "Oznacz jako DONE"}
                    </button>

                    <button
                      className="small-btn danger-btn"
                      onClick={() => handleDeleteTask(task.id)}
                      disabled={workingTaskId === task.id}
                    >
                      Usuń
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}