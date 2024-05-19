import "./sitters.css";
import { useEffect, useState } from "react";

function Sitters() {
  const [sitters, setSitters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/BabysittersJSON.json'); // Fetch from the local JSON file
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await res.json();
        setSitters(resData.babysitters); // Access the "babysitters" array in the JSON
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  let sittersFormatted = sitters.map((sitter, index) => {
    return (
      <div className="show-sitters" key={index}>
        <div className="sitter-info">
          <h2>
            <a href={sitter._id}>{sitter.name}</a>
            <img src={sitter.Image} alt={sitter.name}></img>
          </h2>
        </div>
        <div className="description-sitter">
          <p>
            <strong> Zip: {sitter.ZipCode}</strong>
          </p>
          <ul>
            <li>Bio: {sitter.Bio}</li>
            <li>Driver's License: {sitter.DriversLicense}</li>
            <li>First Aid: {sitter.FirstAidCertified}</li>
            <li>Experience: {sitter.YearsExperience} years</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <main>
      <h1>Our Fabulous Babysitters</h1>
      <div className="sitters-container">{sittersFormatted}</div>
    </main>
  );
}

export default Sitters;