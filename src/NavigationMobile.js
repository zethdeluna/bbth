import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import bonbonlogo from './images/bonbonlogo.png';
import NavigationButton from './NavigationButton';
import NavigationMenu from './NavigationMenu';


class NavigationMobile extends React.Component {
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
    componentDidMount() {
        var prevScrollPos = window.pageYOffset;
        if (window.innerWidth <= 780) {
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollPos > currentScrollPos) {
                    document.getElementById("navbarMobile").style.transform = "translateY(0)";
                } else {
                    document.getElementById("navbarMobile").style.transform = "translateY(-12vh)";
                }
                prevScrollPos = currentScrollPos;
            }
        }
    }
    render() {
        return (
            <div id="navbarMobile" className="fade-in">
                <div id="navbarLogoMobile">
                    <AnchorLink>
                        <img id="logo" alt="Bon Bon Tea House Logo" src={bonbonlogo}/>
                    </AnchorLink>
                </div>
                <NavigationButton handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                <NavigationMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
            </div>
        )
    }
}

export default NavigationMobile