import React,{useState} from 'react'
import "./colorchanger.css"
function Colorchanger() {
    const [color,setcolor]=useState("")
    const [valuecolor,setvaluecolor]=useState("")
    const [coty,setcoty]=useState("rgb")

    const randgen=()=>{
        const r = Math.floor(Math.random()*255)
        const g = Math.floor(Math.random()*255)
        const b = Math.floor(Math.random()*255)

        setvaluecolor(`rgb(${r},${g},${b})`)
    }
    const handlechangehexcolor=()=>{
        setcoty("hex")
    }
  return (
    <div>
        <div className="maincolor" style={{backgroundColor:valuecolor}}>
            <label>Select any color: </label>
            <input type="color" onChange={(e)=> setvaluecolor(e.target.value)}/>
            <h1>{valuecolor}</h1>
            <button onClick={handlechangehexcolor}>RGB Color</button>
            <button onClick={handlechangehexcolor}>Hex Color</button>
            <button onClick={randgen}>random color generator</button>

            <h1>{valuecolor}</h1>
        </div>
    </div>
  )
}

export default Colorchanger