import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { LOGO_URL } from "../utils/constants";


const Header=()=>{

    const[btnName,setBtnName]=useState("Login")


    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="food-logo" />
            </div>
            <div className="navlinks">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>

                    
                    <li >
                        <button 
                        className="login"
                         type="button"
                         onClick={()=>{
                          btnName === "Login"? setBtnName("Logout"):setBtnName("Login")
                         }}
                         >
                            {btnName}
                            </button>
                        </li>
                </ul>
            </div>
        </div>
    )
}


export default Header;