import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import bonbonlogo from './images/bonbonlogo.png';

class Navigation extends React.Component {
    componentDidMount() {
        var prevScrollPos = window.pageYOffset;
        if (window.innerWidth >= 800) {
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (currentScrollPos < 10) {
                    document.getElementById("navbar").style.transform = "translateY(0)";
                } else {
                    if (prevScrollPos > currentScrollPos && currentScrollPos < document.body.scrollHeight - 10) {
                        document.getElementById("navbar").style.transform = "translateY(0)";
                    } else {
                        document.getElementById("navbar").style.transform = "translateY(-12vh)";
                    }
                    prevScrollPos = currentScrollPos;
                }
            }
        }
    }
    render() {
        return (
            <div id="navbar" className="fade-in">
                <div id="navbarName">
                    <h1><AnchorLink href="#imageGallery">Bon Bon Tea House</AnchorLink></h1>
                </div>
                <div id="navbarLogo">
                    <img id="logo" alt="Bon Bon Tea House Logo" src={bonbonlogo}/>
                </div>
                <div id="navbarLinks">
                    <ul>
                        <li><AnchorLink className="AnchorLink" href="#menu-container">Menu</AnchorLink></li>
                        <li><AnchorLink className="AnchorLink" href="#locationsTitle">Locations</AnchorLink></li>
                        <li><AnchorLink className="AnchorLink" href="#aboutPage">About</AnchorLink></li>
                        <li>
                            <a className="AnchorLink" href="https://www.instagram.com/bonbonteahouse/"
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
}

export default Navigation