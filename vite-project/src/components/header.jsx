import React from 'react'
import navMenue from '../../constants/NavMenue'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='flex justify-between sticky top-0 bg-white rounded-md p-6 shadow-md mx-4 my-2'>
    <div>logo</div>
    <nav>
        {navMenue.map((menu)=>
            (
                <Link key={menu.label} to={menu.route} className="m-3 font-bold hover:underline text-xl no-underline " >{menu.label}</Link>  
            )
        )}
           
      
    </nav>
    </div>
   

    </>
  )
}

export default Header