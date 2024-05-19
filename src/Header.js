import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
              <img className='header__logo'
               src='https://i.imgur.com/ZxEabZ0.png' 
               alt='J-Sit'/>
               <div className='header__search'>
                <input 
                className='header__searchInput'
                type='text'/>
               </div>
      
    </div>
  )
}

export default Header
