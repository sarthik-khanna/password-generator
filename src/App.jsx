import { useCallback, useState,useEffect,useRef} from 'react';

function App() {
  const [length,setLength]=useState(8);
const [numberAllowed , setnumberAllowed]=useState(false);
const [charAllowed,setcharAllowed] = useState(false);
const [password ,setPassword]=useState("");

const passwordRef= useRef(null);

const passwordCopytoClipboard = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

const passwordGenerator = useCallback(()=>{
  let pass= " ";
  let str="ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefgijklmnopqrstuvwxyz";
if(numberAllowed) str +="0123456789";
if(charAllowed) str +="!@#$%^&*";

for(let i =1; i<=length; i++) {
  let char =Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char);
}
setPassword(pass);

},[length,numberAllowed,charAllowed ,setPassword])

useEffect(()=>{
  passwordGenerator()

},[length,numberAllowed,charAllowed,setPassword])


  return (
    <>
    <div className='w-full max-w-md shadow-md mx-auto rounded-lg py-3 px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white'>Password generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input className='outline-none w-full py-1 px-3'
placeholder='password' 
type="text"
value={password}
readOnly
ref={passwordRef}
/>
<button onClick={passwordCopytoClipboard} className='text-white outline-none bg-blue-400 px-2 py-0.5 shrink-0'>Copy</button>
</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
<input 
type="range"
min={6}
max={100}
value={length}
className='cursor-pointer'
onChange={(e)=>{setLength(e.target.value)}}
/>
<label>length:{length}</label>
</div>
<div className='flex- items-center gap-x-1'>
<input
type="checkbox"
defaultChecked={numberAllowed}
id="numberInput"
onChange={()=>{setnumberAllowed ((prev)=>!prev);
}}
/>
<label>number</label>
</div>
<div className='flex- items-center gap-x-1'>
<input
type="checkbox"
defaultChecked={numberAllowed}
id="numberInput"
onChange={()=>{setnumberAllowed ((prev)=>!prev);
}}
/>
<label>character</label>
</div>



</div>
    </div>
    </>
  )
}

export default App
