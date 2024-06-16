import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h1>ERROR</h1>
      <p>{error.message}</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default CareersError;
