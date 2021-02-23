import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import bonbonlogo from './images/bonbonlogo.png';

function Navigation() {
    return (
        <div id="navbar" className="fade-in-homepage">
            <div id="main-name">
                <h1><AnchorLink href="#homepage">Bon Bon Tea House</AnchorLink></h1>
            </div>
            <div id="logo-box">
                <img id="logo" alt="Bon Bon Tea House Logo" src={bonbonlogo}/>
            </div>
            <div id="navs">
                <ul>
                    <li><AnchorLink href="#menu-container">Menu</AnchorLink></li>
                    <li><AnchorLink href="#sfv-map">Locations</AnchorLink></li>
                    <li>About</li>
                    <li>
                        <a href="https://www.instagram.com/bonbonteahouse/"
                        target="_blank" rel="noreferrer">
                            <button>
                                <i class="fab fa-instagram"></i>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation