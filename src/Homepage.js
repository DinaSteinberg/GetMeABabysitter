import React from 'react'
import BabysitterCards from './BabysitterCards'

function Homepage() {
  return (
    <>
    <div className="container text-center">
        <div className="row justify-content-center">
          {/* render all of them */}
          <BabysitterCards />
        </div>
    </div>
    </>
  )
}

export default Homepage
