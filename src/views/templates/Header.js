 import React from 'react';
 import { Link } from 'react-router-dom';
 import "./Header.css";
 
 function Header() {
     return (
         <div>
            <Link to="/">
                <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c513.png" alt="logo"/>
            </Link> 
            <div className="header_search">
                <input type="text">
                </input>
                <SearchIcon>
                <SearchIcon/>
            </div>   
         </div>
     )
 }
 
 export default Header
 