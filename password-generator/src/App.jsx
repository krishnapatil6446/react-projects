import React from 'react'
import { useState, useCallback, useEffect,useRef} from 'react'

const App = () => {
  const [length, setlength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
//UseRef Hook 

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(NumberAllowed) str+= "0123456789";
      if(CharAllowed) str+= "!@#$%^&*()_+{}'':;";
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length, NumberAllowed, CharAllowed, setPassword],
  )

  const copytoclipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(() => {
   passwordGenerator()
  }, [length, NumberAllowed, CharAllowed, passwordGenerator])
  
  return (
    <>
    <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700">
      <h1 className='text-white text-center text-3xl mb-9'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copytoclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={16}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label className='text-white'>length: {length}</label>
        </div>
        <div className='flex items-center gap=x=1'>
        <input 
        type="checkbox"
        defaultChecked={NumberAllowed}
        id="numberInput"
        onChange={()=>{setNumberAllowed((prev) =>!prev)}}
        />
        <label htmlFor="numberInput" className='text-white ml-2'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1 text-white'>
          <input type='checkbox'
          defaultChecked={CharAllowed}
          id="characterInput"
          onChange={()=>{setCharAllowed((prev) =>!prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
