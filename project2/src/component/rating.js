import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"
import "./colorchanger.css"
function Rating({number=5}) {
    const [rating,setrating]=useState(0)
    const [hover,sethover]=useState(0)

    const handleClick=(index)=>{
        console.log(index+1);
        
        setrating(index)
    }
    const handleMouseMove=(index)=>{
        sethover(index)
    }
    const handleMouseLeave=()=>{
        sethover(0)
    }

  return (
    <div>
        <h1>Rating</h1>
        <div className="rating">
            {[...Array(number)].map((_,index)=>{
                return (
            <FaStar className={index <= (hover || rating )?'active': 'inactive'} key={index} onClick={()=>handleClick(index)} onMouseMove={()=>handleMouseMove(index)} onMouseLeave={()=>handleMouseLeave()} size={40}/>
                ) 
            })}
        </div>
    </div>
  )
}

export default Rating