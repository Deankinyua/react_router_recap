//  note: loader function to load data into a component before it renders.

export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error("Could not Fetch the Careers");
  }

  return res.json();
};

export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not Find that particular Career");
  }
  return res.json();
};
