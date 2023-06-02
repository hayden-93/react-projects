import Task from "../../Components/Task/Task";
import { useDataFetching } from "../../Hooks/useDataFetching";
import "./Backlog.css";

export function Backlog() {
  const [loading, error, tasks] = useDataFetching(
    `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`
  );

  return (
    <div className="Backlog-wrapper">
      <h2>Backlog</h2>
      <div className="Tasks-wrapper">
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} title={task.title} body={task.body} />
          ))
        )}
      </div>
    </div>
  );
}
