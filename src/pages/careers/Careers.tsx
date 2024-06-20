import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careersData = useLoaderData();
  return (
    <div className="careers">
      {careersData.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;
