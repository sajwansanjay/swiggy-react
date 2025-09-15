import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div id="" className="container-box error-page">
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <p>{err.data}</p>
      <Link to="/" className="error-link">
        Go back to the Home Page
      </Link>
    </div>
  );
};

export default Error;
