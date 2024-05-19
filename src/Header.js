import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
              <img className='header__logo'
               src='https://i.imgur.com/ZxEabZ0.png' 
               alt='J-Sit'/>
               <div className='header__search'>
                {/* <input 
                className='header__searchInput'
                placeholder='What time would you like to schedule a babysitter for?'
                type='text'/> */}
               </div>
      
    </div>
  )
}

export default Header
