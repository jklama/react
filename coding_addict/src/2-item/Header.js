import React from 'react'

function Header() {
  return (
    <>
      <div className='all'>
        <div className='logo'>
          <h1>BackRoads</h1>
        </div>

        <div className='buttons'>
          <ul className='buttons_item'>
            <li className='buttons_links'>
              <a href='#' className='items'>
                Home
              </a>
            </li>
            <li className='buttons_links'>
              <a href='#' className='items'>
                About
              </a>
            </li>
            <li className='buttons_links'>
              <a href='#' className='items'>
                Services
              </a>
            </li>
            <li className='buttons_links'>
              <a href='#' className='items'>
                Tour
              </a>
            </li>
          </ul>
        </div>

        <div className='links'>
          <h1>facebook</h1>
          <h1>Twitter</h1>
          <h1>Instagram</h1>
        </div>
      </div>
    </>
  )
}

export default Header
