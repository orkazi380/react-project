    import React from 'react'
import "./header.css"
import card1 from "../assest/card1.png"
import card2 from "../assest/card2.png"
function Header() {
  return (
    <div>
        <div className="headerdiv"> 
            <div  className="headerdivleft1">
                <h1>Get Paid Early Save automatically all your Pay</h1>
                <p>Supports Small business with simple invoicing powerful integrations and cash flow managment  tools</p>
                <div className="headerdivleftinputfield">
                    <div className="headerdivleftinputfieldinner">
                    <input type="text" placeholder="Your Business Email"/>
                    <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="headerdivright2">
                <div className="headerdivrightcared"><img src={card1} alt="" /></div>
                <div className="headerdivrightnotca"><img src={card2} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Header