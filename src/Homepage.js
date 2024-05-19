import React from "react";
// import BabysitterCards from "./BabysitterCards";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Sitters from "./Sitters";

function Homepage() {
  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-center">
          {/* render all of them */}
          <Header/>
          {/* <BabysitterCards /> */}
           <Sitters />
        </div>
      </div>
    </>
  );
}

export default Homepage;
