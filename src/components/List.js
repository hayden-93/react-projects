import { Link } from "react-router-dom";

function List({ items }) {
  return (
    <ul>
      {items.map(({ field, url }) => (
        <li key={field}>
          <span>
            {field}: <Link to={url}>{url}</Link>
          </span>
        </li>
      ))}
    </ul>
  );
}
export default List;
