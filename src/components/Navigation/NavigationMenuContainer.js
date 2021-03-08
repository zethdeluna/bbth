import React from 'react';
import NavigationButton from './NavigationButton';
import NavigationMenu from './NavigationMenu';

class NavigationMenuContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }
    toggleMenu() {
        this.setState({
            visible: !this.state.visible,
        });
    }
    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
    }
    render() {
        return (
            <div>
                <NavigationButton handleMouseDown={this.handleMouseDown}/>
                <NavigationMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
            </div>
        )
    }
}

export default NavigationMenuContainer