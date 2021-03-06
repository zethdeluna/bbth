import React from 'react';
import './Locations.scss';
import sfvMap from '../../images/sfvMap.png';
import bonbonlogo from '../../images/bonbonlogo.png';

class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickActive: false
        }
    }

    // enlarge company logo on map on hover over location 
    onMouseEnterNorthridge = e => {
        const img1 = document.getElementById("img1")
        img1.classList.add("enlarged")
    }
    onMouseLeaveNorthridge = e => {
        const img1 = document.getElementById("img1")
        img1.classList.remove("enlarged")
    }

    onMouseEnterWinnetka = e => {
        const img1 = document.getElementById("img2")
        img1.classList.add("enlarged")
    }
    onMouseLeaveWinnetka = e => {
        const img1 = document.getElementById("img2")
        img1.classList.remove("enlarged")
    }

    onMouseEnterChatsworth = e => {
        const img1 = document.getElementById("img3")
        img1.classList.add("enlarged")
    }
    onMouseLeaveChatsworth = e => {
        const img1 = document.getElementById("img3")
        img1.classList.remove("enlarged")
    }

    render() {
        return (
            <div id="locationsContainer">
                <div id="locationsTitle"><h2>Locations</h2></div>
                <div id="locations-section">
                    <div id="locations">
                        <ul>
                            <li
                            onMouseEnter={this.onMouseEnterNorthridge}
                            onMouseLeave={this.onMouseLeaveNorthridge}
                            >
                                <span className="loc">Northridge</span>
                                <br/>
                                <span className="locations-item">9663 Reseda Blvd</span>
                                <br/>
                                <span className="locations-item">Northridge, CA 91324</span>
                                <br/>
                                <span className="locations-item">(818) 280 - 6677</span>
                                <br/>
                                <a id="northridge-yelp-link" href="https://www.yelp.com/biz/bon-bon-tea-house-los-angeles-2?osq=bon+bon+tea+house"
                                target="_blank" rel="noreferrer">
                                    <button id="yelpNorthridge"><i class="fab fa-yelp"></i></button>
                                </a>
                                <a id="northridge-facebook-link" href="https://www.facebook.com/bonbonteahouse/"
                                target="_blank" rel="noreferrer">
                                    <button id="facebookNorthridge"><i class="fab fa-facebook-f"></i></button>
                                </a>
                            </li>
                            <li 
                            onMouseEnter={this.onMouseEnterWinnetka}
                            onMouseLeave={this.onMouseLeaveWinnetka}
                            >
                                <span className="loc">Winnetka</span>
                                <br/>
                                <span className="locations-item">8316 Winnetka Ave</span>
                                <br/>
                                <span className="locations-item">Winnetka, CA 91306</span>
                                <br/>
                                <span className="locations-item">(818) 772 - 6900</span>
                                <br/>
                                <a id="winnetka-yelp-link" href="https://www.yelp.com/biz/bon-bon-tea-house-canoga-park?osq=bon+bon+tea+house"
                                target="_blank" rel="noreferrer">
                                    <button id="yelpWinnetka"><i class="fab fa-yelp"></i></button>
                                </a>
                                <a id="winnetka-facebook-link" href="https://www.facebook.com/Bon-Bon-Tea-House-Canoga-Park-163592660677775/"
                                target="_blank" rel="noreferrer">
                                    <button id="facebookWinnetka"><i class="fab fa-facebook-f"></i></button>
                                </a>
                            </li>
                            <li
                            onMouseEnter={this.onMouseEnterChatsworth}
                            onMouseLeave={this.onMouseLeaveChatsworth}
                            >
                                <span className="loc">Chatsworth</span>
                                <br/>
                                <span className="locations-item">20790 Nordhoff St</span>
                                <br/>
                                <span className="locations-item">Chatsworth, CA 91311</span>
                                <br/>
                                <span className="locations-item">(818) 280 - 3362</span>
                                <br/>
                                <a id="chatsworth-yelp-link" href="https://www.yelp.com/biz/bon-bon-tea-house-chatsworth?osq=bon+bon+tea+house"
                                target="_blank" rel="noreferrer">
                                    <button id="yelpChatsworth"><i class="fab fa-yelp"></i></button>
                                </a>
                                <a id="chatsworth-facebook-link" href="https://www.facebook.com/Bon-Bon-Tea-House-Chatsworth-278082143082955/"
                                target="_blank" rel="noreferrer">
                                    <button id="facebookChatsworth"><i class="fab fa-facebook-f"></i></button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="img-div">
                        <img id="sfv-map" src={sfvMap} alt="Map of the San Fernando Valley"/>
                        <img id="img1" src={bonbonlogo} alt="Bon Bon Tea House Logo"/>
                        <img id="img2" src={bonbonlogo} alt="Bon Bon Tea House Logo"/>
                        <img id="img3" src={bonbonlogo} alt="Bon Bon Tea House Logo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Locations