import { useEffect, useState } from "react";

const FetchBabysitters = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBabysitterData = async () => {
      try {
        const response = await fetch("BabysittersJSON.json");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let babysittersData = await response.json();
        setData(babysittersData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    console.log(babysittersData)
    fetchBabysitterData();
  }, []);

  return <div></div>;
};

export default FetchBabysitters;
