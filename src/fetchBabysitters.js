const fetchBabysitters = async () => {
  const response = await fetch("./fetchBabysitters.json");

  if (!response.ok) {
    throw new Error("Error:", response.status);
  }

  console.log(response);
  return response.json();
};

export default fetchBabysitters;
