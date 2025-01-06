import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div className=' mr-12 mb-4 bg-white text-black p-10 inline-block text-center rounded '>
      <img className='h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
      <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
      <h2>{props.city}, {props.age}</h2>
      <button className='mt-5 p-3 font-medium rounded text-white bg-emerald-700'>Add Friend</button>
      <button user = {props.name}/>
    </div>
  )
}

export default Card
