import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("olive")
  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded 3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full text-white shadow-lg text-3xl' style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-full text-white shadow-lg text-3xl' style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full text-white shadow-lg text-3xl' style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 rounded-full text-black shadow-lg text-3xl' style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 rounded-full text-black shadow-lg text-3xl' style={{backgroundColor:"Pink"}}>Pink</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 rounded-full text-white shadow-lg text-3xl' style={{backgroundColor:"Black"}}>Black</button>
        </div>
      </div>
   </div>
  )
}

export default App
