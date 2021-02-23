import React from 'react';
import FreshTeas from './FreshTeas';
import MilkTeas from './MilkTeas';
import Smoothies from './Smoothies';
import SlushesAndSnowy from './SlushesAndSnowy';
import CoffeeAndYogurt from './CoffeeAndYogurt';
import AddOns from './AddOns';

function Menu() {
    return (
        <div id="menu-container">
            <br/><br/><br/><br/>
            <div id="main-drinks">
                <FreshTeas/>
                <MilkTeas/>
                <Smoothies/>
                <SlushesAndSnowy/>
                <CoffeeAndYogurt/>
            </div>
            <div id="add-ons">
                <AddOns/>
            </div>
        </div>
    )
}

export default Menu