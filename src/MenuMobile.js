import React from 'react';
import BonBonMenuMobile from './images/BonBonMenuMobile.jpg';

function MenuMobile() {
    return (
        <div id="menuMobile">
            <div class="spacer"><span>Menu</span></div>
            <img src={BonBonMenuMobile} alt="Bon Bon Tea House Menu"/>
        </div>
    )
}

export default MenuMobile