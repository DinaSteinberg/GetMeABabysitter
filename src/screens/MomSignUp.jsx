import { useContext, useState } from "react";
import { MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import TimePicker from 'react-time-picker';

// import { useNavigate } from "react-router";
// import { CurrentUser } from "../contexts/CurrentUser.js";
import { Link } from "react-router-dom";
// import { BASE_URL } from "../App.js";
import "../styles/login.css";

function MomSignUp() {
  // const navigate = useNavigate();

  // const { setCurrentUser } = useContext(CurrentUser);
  const [mother, setMother] = useState({
    firstName: "",
    lastName: "",
    numberOfChildren: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email:"",
    startTime: "",
    endTime: "",

    });

  // const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("mother", mother);
    localStorage.setItem('mother', JSON.stringify(mother));
  }

  //   try {
  //     const response = await fetch(`${BASE_URL}/api/authentication/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     });

  //     const data = await response.json();
  //     console.log("Login", data);

  //     if (response.ok) {
  //       setCurrentUser(data.user);
  //       localStorage.setItem("token", data.token);
  //       navigate(`/`);
  //     } else {
  //       setErrorMessage(data.message);
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //     setErrorMessage("An error occurred, please try again");
  //   }
  // }

  return (
    <div className="login-top-container">
    <div className="login-container">
      <h1>Find A Babysitter</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <div className="form-control">
          <input
            type="name"
            required
            value={mother.firstName}
            onChange={(e) => setMother({ ...mother, firstName: e.target.value })}
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
            onChange={(e) => setMother({ ...mother, lastName: e.target.value })}
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
            onChange={(e) => setMother({ ...mother, numberOfChildren: e.target.value })}
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
            onChange={(e) => setMother({ ...mother, address: e.target.value })}
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
            onChange={(e) => setMother({ ...mother,city: e.target.value })}
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

{/* <TimePicker
  label="Start time"
  views={['hours']}
  value={mother}
  onChange={(e) => setMother({ ...mother, startTime: e.target.value })}
/>

<TimePicker
  label="end time"
  views={['hours']}
  value={mother.endTime}
  onChange={(e) => setMother({ ...mother, endTime: e.target.value })}
/> */}

<TimePicker   onChange={(e) => setMother({ ...mother, startTime: e.target.value })} />


<TimePicker   onChange={(e) => setMother({ ...mother, endTime: e.target.value })} />

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
