import React from "react";
import BabysitterCards from "./BabysitterCards";
import SearchForm from "./SearchForm";
import Header from "./Header";

function Homepage() {
  return (
    <>
  
      <div className="container text-center">
        <div className="row justify-content-center">
          {/* render all of them */}
          <Header/>
          <BabysitterCards />
        </div>
      </div>
    </>
  );
}

export default Homepage;
