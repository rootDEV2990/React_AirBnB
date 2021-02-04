 import React from 'react';
 import "./Header.css";
 import SearchIcon from '@material-ui/icons/Search';
 import LanguageIcon from '@material-ui/icons/Language';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 import { Avatar, IconButton } from '@material-ui/core';
 import { Link } from 'react-router-dom';

 
 
 function Header() {
     return (
         <div className="header">
            <Link to="/">
                <img className="header-logo" src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c513.png" alt="logo"/>
            </Link> 
            <div className="header-search">
                <input type="text">
                </input>
                <SearchIcon />
            </div>
            <div className="header-right">
                <a href="#">Become a Host</a>
                <IconButton>
                    <LanguageIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                <Avatar />
            </div>    
         </div>
     )
 }
 
 export default Header
 