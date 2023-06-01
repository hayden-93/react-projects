import "./Task.css";

export function Task({ title, body }) {
  return (
    <div className="Task-wrapper">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
