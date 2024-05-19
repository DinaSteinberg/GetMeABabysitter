import React from "react";
import BabysitterCards from "./BabysitterCards";
import SearchForm from "./SearchForm";

function Homepage() {
  return (
    <>
      <div className="container text-center">
        <SearchForm />
        <div className="row justify-content-center">
          {/* render all of them */}
          <BabysitterCards />
        </div>
      </div>
    </>
  );
}

export default Homepage;
