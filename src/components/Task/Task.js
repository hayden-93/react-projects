import "./Task.css";

export function Task({ id, title, body, onDragStart }) {
  return (
    <div
      className="Task-wrapper"
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
