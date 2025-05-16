import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <div>
            <div className="navdivinner">
                <div className="navdivinnerlogolist">
                    <div className="navdivinnerlogo">
                        <img src="https" alt="" />
                        <span>FinPay</span>
                    </div>
                    <div className="navdivinnerlist">
                        <ul>
                            <NavLink to="/"><li>Products</li></NavLink>
                            <NavLink to="/"><li>Customers</li></NavLink>
                            <NavLink to="/"><li>Pricing</li></NavLink>
                            <NavLink to="/"><li>Learn</li></NavLink>
                        </ul>
                    </div>

                </div>

                <div className="navdivinnerauth">
                    <div>
                        <NavLink to="/"><li className="navdivinnerauthlogin">Login</li></NavLink>
                        <NavLink to="/"><li className="navdivinnerauthsignup">Sign Up</li></NavLink>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Nav