import { useState } from "react";
// import { BASE_URL } from "../App.js";
import "./login.css";
import fetchBabysitters from "./fetchBabysitters";

function MomSignUp() {
  const [mother, setMother] = useState({
    firstName: "",
    lastName: "",
    numberOfChildren: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
    startTime: "",
    endTime: "",
  });

  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (mother.startTime >= mother.endTime) {
      setError("Start time must be before end time.");
      window.alert("Start time must be before end time. Please try again.");
    } else {
      setError('');
      localStorage.setItem('mother', JSON.stringify(mother));
      const data = fetchBabysitters();
      console.log(data)
      // Further processing or form submission logic goes here
    }
  }

  return (
    <div className="login-top-container">
      <div className="login-container">
        <h1>Find a Babysitter</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <div className="form-control">
            <input
              type="name"
              required
              value={mother.firstName}
              onChange={(e) =>
                setMother({ ...mother, firstName: e.target.value })
              }
              id="firstName"
              name="firstName"
            />
          </div>

          <label htmlFor="lastName">Last Name</label>
          <div className="form-control">
            <input
              type="name"
              required
              value={mother.lastName}
              onChange={(e) =>
                setMother({ ...mother, lastName: e.target.value })
              }
              id="lastName"
              name="lastName"
            />
          </div>

          <label htmlFor="numberOfChildren"># of Children</label>
          <div className="form-control">
            <input
              type="number"
              required
              value={mother.numberOfChildren}
              onChange={(e) =>
                setMother({ ...mother, numberOfChildren: e.target.value })
              }
              id="numberOfChildren"
              name="numberOfChildren"
            />
          </div>

          <label htmlFor="address">address</label>
          <div className="form-control">
            <input
              type="address"
              required
              value={mother.address}
              onChange={(e) =>
                setMother({ ...mother, address: e.target.value })
              }
              id="address"
              name="address"
            />
          </div>

          <label htmlFor="city">City</label>
          <div className="form-control">
            <input
              type="city"
              required
              value={mother.city}
              onChange={(e) => setMother({ ...mother, city: e.target.value })}
              id="city"
              name="city"
            />
          </div>

          <label htmlFor="zip">Zip</label>
          <div className="form-control">
            <input
              type="zip"
              required
              value={mother.zip}
              onChange={(e) => setMother({ ...mother, zip: e.target.value })}
              id="address"
              name="address"
            />
          </div>

          <label htmlFor="phone">Phone #</label>
          <div className="form-control">
            <input
              type="phone"
              required
              value={mother.phone}
              onChange={(e) => setMother({ ...mother, phone: e.target.value })}
              id="phone"
              name="phone"
            />
          </div>
          <label htmlFor="email">email</label>
          <div className="form-control">
            <input
              type="email"
              required
              value={mother.email}
              onChange={(e) => setMother({ ...mother, email: e.target.value })}
              id="email"
              name="email"
            />
          </div>
          <label htmlFor="startTime">Start Time:</label>
          <div className="form-control">
            <input
              type="time"
              required
              value={mother.startTime}
              onChange={(e) =>
                setMother({ ...mother, startTime: e.target.value })
              }
              id="startTime"
              name="startTime"
            />
          </div>

          <label htmlFor="endTime">End Time:</label>
          <div className="form-control">
            <input
              type="time"
              required
              value={mother.endTime}
              onChange={(e) =>
                setMother({ ...mother, endTime: e.target.value })
              }
              id="endTime"
              name="endTime"
            />
          </div>

          <button type="submit" className="login-button">
            Find
          </button>
        </form>
      </div>
    </div>
  );
}

export default MomSignUp;
