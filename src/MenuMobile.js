import React from 'react';
import BonBonMenuMobile from './images/BonBonMenuMobile.jpg';

function MenuMobile() {
    return (
        <div id="menuMobile">
            <div className="spacer"><h2>Menu</h2></div>
            <img id="menuMobileImage" src={BonBonMenuMobile} alt="Bon Bon Tea House Menu"/>
        </div>
    )
}

export default MenuMobile