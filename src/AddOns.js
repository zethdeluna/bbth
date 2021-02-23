import React from 'react';

function AddOns() {
    return (
        <div className="category">
            <h1 className="category-name">
                Add-Ons & Extras
                <span className="price">$0.65</span>
                <br/>
            </h1>
            <ul>
                <li>+ Honey Boba</li>
            </ul> 
            <ul>
                <li>+ Coffee Pudding</li>
                <li>+ Egg Pudding</li>
                <li>+ Mango Pudding</li>
                <li>+ Taro Pudding</li>
            </ul> 
            <ul>
                <li>+ Green Apple Jelly <i class="fas fa-seedling"></i></li>
                <li>+ Lychee Jelly <i class="fas fa-seedling"></i></li>
                <li>+ Mango Jelly <i class="fas fa-seedling"></i></li>
                <li>+ Passionfruit Jelly <i class="fas fa-seedling"></i></li>
                <li>+ Rainbow Jelly <i class="fas fa-seedling"></i></li>
            </ul> 
            <ul>
                <li>+ Aloe Vera <i class="fas fa-seedling"></i></li>
                <li>+ Grass Jelly <i class="fas fa-seedling"></i></li>
                <li>+ Red Bean <i class="fas fa-seedling"></i></li>
                <li>+ Taro Chunks <i class="fas fa-seedling"></i></li>
            </ul>
            <ul>
                <li>+ Vanilla Latte Foam <span className="price">$1.00</span></li>
                <li>+ Sea Salt Vanilla Latte Foam <span className="price">$1.00</span></li>
            </ul>
            <ul>
                <li>Power Size <span className="price">$1.00</span></li>
                <li>Sub Honey <span className="price">$0.65</span></li>
            </ul>
        </div>
    )
}

export default AddOns