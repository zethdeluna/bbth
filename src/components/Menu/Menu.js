import React from 'react';
import './Menu.scss';
// import BonBonMenu from '../../images/BonBonMenu.png';
import { ReactComponent as BonBonMenu } from '../../images/bonbonMenu.svg';

function Menu() {
    return (
        <div id="menu-container">
            <div className="spacer"/>
            <h2>Menu</h2>
            {/* <img id="menu-img" src={BonBonMenu} alt="Bon Bon Tea House Menu"/>
             */}
             <BonBonMenu/>
        </div>
    )
}

export default Menu