import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import bonbonlogo from './images/bonbonlogo.png';

function Navigation() {
    return (
        <div id="navbar">
            <div id="main-name">
                <h1>Bon Bon Tea House</h1>
            </div>
            <div id="logo-box">
                <img id="logo" alt="Bon Bon Tea House Logo" src={bonbonlogo}/>
            </div>
            <div id="navs">
                <ul>
                    <li><AnchorLink href="#menu-container">Menu</AnchorLink></li>
                    <li>Locations</li>
                    <li>About</li>
                    <li><i class="fab fa-instagram"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation