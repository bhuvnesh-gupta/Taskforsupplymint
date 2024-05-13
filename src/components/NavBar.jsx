import React from 'react'
import SearchBar from './Searchbar'

import Navlinks from './Navlinks'
import MiddleNavbar from './MiddleNavbar';




function NavBar() {
  return (
    <div className='flex flex-col bg-slate-50 shadow-lg w-full '>
      <div className='flex justify-between '>
        <SearchBar  />
        <Navlinks />
      </div>
    <MiddleNavbar />
    
    </div>
  )
}

export default NavBar