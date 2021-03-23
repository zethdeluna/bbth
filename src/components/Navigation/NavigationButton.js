import React from 'react';
import './NavigationMobile.scss';

class NavigationButton extends React.Component {
    render() {
        var visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }
        return (
            <div id="navButtonContainer" onMouseDown={this.props.handleMouseDown}>
                <div id="navButton">
                    <span className={visibility}/>
                    <span className={visibility}/>
                    <span className={visibility}/>
                </div>
            </div>
        );
    }
}

export default NavigationButton