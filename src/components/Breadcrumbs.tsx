import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  pathArray.shift();

  return (
    <div>
      {pathArray.map((path) => (
        <div key={path} className="crumb">
          {path}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
