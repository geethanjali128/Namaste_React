import React from "react";
import { LOGO_URL } from "../utils/constants";



const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="food-logo" />
            </div>
            <div className="navlinks">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Login/Signup</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;