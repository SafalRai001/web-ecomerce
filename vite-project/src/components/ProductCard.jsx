import React from 'react'

function Card({title,name,category, price}) {


  return (
    <div className='mx-3 my-5 bg-slate-200  h-48 text-center rounded-xl'>
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className='text-2xl'>{name}</p>
      <p>{category}</p>
      <p className='text-yellow-600 font-bold'>${price}</p>
      <button className='text-white font-bold w-32 rounded-md mx-1 px-2 bg-black transition duration-200 hover:bg-slate-400 hover:text-zinc-950'>Add to cart</button>
    </div>
  )
}

export default Card