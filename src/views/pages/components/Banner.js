import React, { useState } from 'react';
import "./Banner.css";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner-search">
                {showSearch && <h1>Search</h1>}
                <Button onClick={() => setShowSearch(!showSearch)} className="banner-search-btn" varient="outlined">{showSearch ? "hide" : "Search Dates"}</Button>
            </div>
            <div className="banner-info">
                <h1>Get out and streach out your imagination</h1>
                <h6>Plan a diffrent kind of get away to find hidden gems near you</h6>
            </div>
        </div>
    )
}

export default Banner
