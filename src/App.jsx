
import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor]=useState("black")
  return (
      <div className=" w-full h-screen flex justify-center transition-all " style={{backgroundColor:color}} >
        <div className="absolute bottom-5 bg-slate-100 flex flex-wrap justify-between align-middle w-3/4 rounded-3xl p-2 shadow-lg sm:flex-col  lg:flex-row">
        <button onClick={()=>setColor("red")} className="font-bold  mr-3 bg-red-5 rounded-3xl p-2 w-32 flex justify-center" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("yellow")} className="font-bold  mr-3 bg-red-5 rounded-3xl p-2 w-32 flex justify-center" style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("skyblue")} className="font-bold  mr-3 bg-red-5 rounded-3xl p-2 w-32 flex justify-center" style={{backgroundColor:"skyblue"}}>Skyblue</button>
        <button onClick={()=>setColor("brown")} className="font-bold  mr-3 bg-red-5 rounded-3xl p-2 w-32 flex justify-center" style={{backgroundColor:"brown"}}>Brown</button>
        <button onClick={()=>setColor("grey")} className="font-bold  mr-3 bg-red-5 rounded-3xl p-2 w-32 flex justify-center" style={{backgroundColor:"grey"}}>Grey</button>
        <button onClick={()=>setColor("green")} className="font-bold  mr-3 bg-red-5 rounded-3xl p-2 w-32 flex justify-center" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("olive")} className="font-bold  mr-3 bg-red-5 rounded-3xl p-2 w-32 flex justify-center" style={{backgroundColor:"olive"}}>Olive</button>
        <button onClick={()=>setColor("CadetBlue")} className="font-bold  mr-3 bg-red-5 rounded-3xl p-2 w-32 flex justify-center " style={{backgroundColor:"CadetBlue"}}>CadetBlue</button> 
       
         </div>
        

      </div>
  )
}

export default App
