// * loader function load data into a component before it renders.
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json();
};

export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  return res.json();
};
