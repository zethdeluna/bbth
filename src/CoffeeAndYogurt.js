import React from 'react';

function CoffeeAndYogurt() {
    return (
        <div id="coffee-yogurt" className="category">
            <h1 id="coffee" className="category-name">
                Coffee
                <span className="price">$4.85</span>
                <br/>
                <span>Iced or Hot</span>
                <br/><hr/>
            </h1>
            <ul>
                <li>Black Coffee <i class="fas fa-seedling"></i></li>
                <li>Bo's Coffee (w/ brown sugar)</li>
                <li>Caramel Macchiato</li>
                <li>Chai Tea Latte</li>
                <li>Coffee Latte</li>
                <li>Hot Chocolate</li>
                <li>Matcha Latte</li>
                <li>Mocha</li>
            </ul>
            <br/>
            <h1 id="yogurts" className="category-name">
                Yogurt
                <span className="price">$4.40</span>
                <br/><hr/>
            </h1>
            <ul>
                <li>Aloha Pineapple</li>
                <li>Blue Raspberry</li>
                <li>Grapefruit</li>
                <li>Green Apple</li>
                <li>Guava</li>
                <li>Kiwi - Peach</li>
                <li>Lemon</li>
                <li>Lychee</li>
                <li>Mango</li>
                <li>Passionfruit</li>
                <li>Red Bean</li>
                <li>Red Plum</li>
                <li>Strawberry</li>
            </ul>
        </div>
    )    
}

export default CoffeeAndYogurt