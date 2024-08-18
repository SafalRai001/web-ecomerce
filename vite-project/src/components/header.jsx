import React from 'react'
import navMenue from '../../constants/NavMenue'

function Header() {
  return (
    <>
    <div className='flex justify-between sticky top-0 bg-white rounded-md p-6 shadow-md mx-4 my-2'>
    <div>logo</div>
    <nav>
        {navMenue.map((menu)=>
            (
                <a href={menu.route} className="m-3 font-bold hover:underline text-xl no-underline " >{menu.label}</a>  
            )
        )}
           
      
    </nav>
    </div>
   

    </>
  )
}

export default Header