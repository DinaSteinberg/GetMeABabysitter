import React from "react";
import BabysitterCards from "./BabysitterCards";
import SearchForm from "./SearchForm";

function Homepage() {
  return (
    <>
      <SearchForm />
      <div className="container text-center">
        <div className="row justify-content-center">
          {/* render all of them */}
          <BabysitterCards />
        </div>
      </div>
    </>
  );
}

export default Homepage;
