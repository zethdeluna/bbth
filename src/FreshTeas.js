import React from 'react';

function FreshTeas() {
    return (
        <div id="fresh-teas" className="category">
            <h1 className="category-name">
                Fresh Teas 
                <span className="price">$4.20</span> 
                <br/>
                <span>Sweetened or Unsweetened</span>
                <br/><hr/>
            </h1>
            <ul>
                <li>Black Tea <i class="fas fa-seedling"></i></li>
                <li>Green Tea <i class="fas fa-seedling"></i></li>
                <li>Oolong Tea <i class="fas fa-seedling"></i></li>
            </ul>
            <br/>
            <h1 className="category-name">
                Flavored Teas
                <span className="price">$4.50</span>
                <br/><hr/>
            </h1>
            <h3>Classic</h3>
            <ul>
                <li>Almond</li>
                <li>Brown Sugar <i class="fas fa-seedling"></i></li>
                <li>Grapefruit <i class="fas fa-seedling"></i></li>
                <li>Green Apple <i class="fas fa-seedling"></i></li>
                <li>Honey</li>
                <li>Lemon <i class="fas fa-seedling"></i></li>
                <li>Lychee <i class="fas fa-seedling"></i></li>
                <li>Mango <i class="fas fa-seedling"></i></li>
                <li>Peach <i class="fas fa-seedling"></i></li>
                <li>Passionfruit <i class="fas fa-seedling"></i></li>
                <li>Strawberry <i class="fas fa-seedling"></i></li>
            </ul>
            <h3>Exotic</h3>
            <ul>
                <li>Aloha Pineapple <i class="fas fa-seedling"></i></li>
                <li>Blood Orange <i class="fas fa-seedling"></i></li>
                <li>Ginger Brown Sugar <i class="fas fa-seedling"></i></li>
                <li>Guava <i class="fas fa-seedling"></i></li>
                <li>Kiwi - Peach <i class="fas fa-seedling"></i></li>
                <li>Mango Oolong <i class="fas fa-seedling"></i></li>
                <li>Mojito <i class="fas fa-seedling"></i></li>
                <li>Peach Mojito <i class="fas fa-seedling"></i></li>
                <li>Red Plum <i class="fas fa-seedling"></i></li>
                <li>Pomegranate <i class="fas fa-seedling"></i></li>
                <li>Rose Cordial<i class="fas fa-seedling"></i></li>
                <li>Yogurt</li>
            </ul>
        </div>
    )
}

export default FreshTeas