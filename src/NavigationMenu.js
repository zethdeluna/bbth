import React from 'react';

class NavigationMenu extends React.Component {
    render() {
        var visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }
        return (
            <div>
                <div id="flyoutBackground" onMouseDown={this.props.handleMouseDown} className={visibility}/>
                <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
                    <h2><a href="#">About</a></h2>
                    <h2><a href="#menuMobile">Menu</a></h2>
                    <h2><a href="#">Locations</a></h2>
                    <h2><a href="#">Instagram</a></h2>
                </div>
            </div>
        )
    }
}

export default NavigationMenu