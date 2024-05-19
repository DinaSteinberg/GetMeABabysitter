const fetchBabysitters = async () => {
  const response = await fetch("./fetchBabysitters.json");

  if (!response.ok) {
    throw new Error("Error:", response.status);
  }

  return response.json();
};

export default fetchBabysitters;
