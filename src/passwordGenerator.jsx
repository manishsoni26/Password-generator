import React from "react";
import { useState ,useCallback,useEffect,useRef} from "react";

function PasswordGenerator() {
   const [password,setPassword]=useState('')
   const [length,setLength]=useState(6)
   const [numAllowed,setNumAllowed]=useState(false)
   const [charAllowed,setCharAllowed]=useState(false)
   const [copy,setCopy]=useState('Copy')

        
   const generatePassword=useCallback(()=>{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass=""
    if(numAllowed)
        str+="1234567890"
    if(charAllowed)
        str+="~!@#$%^&*()_+/?<>[]{}|'`-"
    for(let i=0;i<length;i++){
        let index=Math.floor(Math.random()*str.length)
        pass+=str[index]
    }
    setPassword(pass)
    setCopy('Copy')
   },[length,numAllowed,charAllowed,setPassword,copy])

   useEffect(()=>{
    generatePassword()
   },[length,numAllowed,charAllowed])
   const passwordRef=useRef()
   const copyToClipboard=()=>{
    setCopy('Copied')
    passwordRef.current.select()
    // passwordRef.current.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
   }

    return (
        <div className="bg-slate-900 w-full h-screen flex flex-col justify-center items-center text-blue-800 "
        style={{backgroundImage: `url(https://img.freepik.com/free-photo/online-security-dark-background-3d-illustration_1419-2804.jpg?t=st=1736880759~exp=1736884359~hmac=54f4e4785480015994d15ef1296b31b8b86567ce02a7cef63a4f134b3bebe7ca&w=1380)`}} >
            <div className="bg-slate-300 w-1/2 h-auto rounded-lg  p-3  shadow-rose-100">
                <h1 className="text-blue-800 block text-3xl font-bold mb-7 text-center ">Password Generator</h1>
                <div className="flex">
                    <input ref={passwordRef} type="text" value={password} placeholder="Password" className="px-2 py-1 
        rounded-s-lg shadow-lg focus:outline-none w-full cursor-default text-blue-600 font-bold" readOnly />
                    <button onClick={copyToClipboard} className="bg-blue-600 rounded-e-lg px-2 active:bg-blue-400  transition-all text-white">{copy}</button>
                </div>
                <div>
                    <input name="range" type="range" min={4} max={50} value={length} className="cursor-pointer" onChange={(e) => {
                        setLength(e.target.value)
                        // console.log(e.target.value)
                    }} />
                    <label htmlFor="range" className="px-5">{length}</label>
                </div>
                <div className="flex gap-10">
                    <div>
                        <label htmlFor="number" className="px-4 cursor-pointer">Number</label>
                        <input value={numAllowed} type="checkbox" name="number"  id="number" className="cursor-pointer"
                        onChange={(e)=>setNumAllowed(e.target.checked)}
                        />
                    </div>
                    <div>
                        <label htmlFor="character" className="px-4 cursor-pointer ">Characters</label>
                        <input value={charAllowed} onChange={(e)=>setCharAllowed(e.target.checked)} type="checkbox" name="character"  id="character" className="cursor-pointer" 
                          />
                    </div>

                </div>



            </div>
        </div>
    )
}
export default PasswordGenerator