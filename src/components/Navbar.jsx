import { useState } from "react";
import React from "react";
import chat from "../assets/chat.png"
import "../App.css"
import navtoggle from "../assets/navtoggle.png"

const Navbar = ()=>{
    return(
        <div className="container">
            <div className="nav">
                <div className="NavToggle">
                <img src={chat} className="chat" alt="chat" />
                </div>

                <img src={navtoggle} className="navtoggle" alt="navtoggle" 
                    onClick={navtoggle}
                />
                    <p className="title">THE CORE</p>
            </div>
        </div>

    );
}

export default Navbar;