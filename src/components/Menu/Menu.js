import React from 'react';
import './Menu.scss';
import BonBonMenu from '../../images/BonBonMenu.jpg'

function Menu() {
    return (
        <div id="menu-container">
            <div className="spacer"/>
            <h2>Menu</h2>
            <img id="menu-img" src={BonBonMenu} alt="Bon Bon Tea House Menu"/>
        </div>
    )
}

export default Menu