import React, { Component } from 'react';
import './App.scss';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import ImageGallery from './ImageGallery';
import ImageGalleryMobile from './ImageGalleryMobile';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Locations from './Locations';
import LocationsMobile from './LocationsMobile';
import About from './About.js';
import AboutMobile from './AboutMobile.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // initial state for cursor position
        xMain: 400,
        yMain: 400,
        xTrailing: 400,
        yTrailing: 400,
        // initial state of window size
        width: 0,
    }
    this.updateDimensions = this.updateDimensions.bind(this);
    this.cursor = React.createRef();
    this.cursorTrailing = React.createRef();
    this.animationFrame = null;
  }
  // update cursor position on mouse move
  componentDidMount() {
    // window size
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    // // cursor
    // document.addEventListener('mousemove', this.onMouseMove);
    // this.moveCursor();
  }
  componentWillUnmount() {
    // window size
    window.removeEventListener("resize", this.updateDimensions);
    // // cursor
    // document.removeEventListener('mousemove', this.onMouseMove);
    // cancelAnimationFrame(this.animationFrame);
  }
  // onMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   this.setState({
  //     xMain: clientX,
  //     yMain: clientY,
  //   });
  // }
  // moveCursor = () => {
  //   const { xMain, yMain, xTrailing, yTrailing } = this.state;
  //   const xDiff = xMain - xTrailing;
  //   const yDiff = yMain - yTrailing;
  //   // number in expression is coefficient of the delay
  //   this.setState({
  //     xTrailing: xTrailing + xDiff / 7,
  //     yTrailing: yTrailing + yDiff / 7,
  //   },
  //   () => {
  //     // using refs and transform for better performance
  //     if (this.cursor.current) {
  //       this.cursor.current.style.transform = `translate3d(${xMain}px, ${yMain}px, 0) translate(-50%, -50%)`;
  //       this.cursorTrailing.current.style.transform = `translate3d(${xTrailing}px, ${yTrailing}px, 0) translate(-50%, -50%)`;
  //       this.animationFrame = requestAnimationFrame(this.moveCursor);
  //     }
  //   });
  // }

  // track window size and update state
  updateDimensions () {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    this.setState({
      width: windowWidth,
    })
  }

  render() {    
    const width = this.state.width;
    let navigation, imageGallery, menu, locations, about;

    if (width < 800) {
      navigation = <div><NavigationMobile/></div>;
      imageGallery = <div><ImageGalleryMobile/></div>
      menu = (
        <div>
          <div style={{position: "relative", width: "100vw", height: "100vh", zIndex: "-1" }}/>
          <MenuMobile/>
        </div>
      );
      locations = <div><LocationsMobile/></div>
      about = <div><AboutMobile/></div>
    } else {
      // // cursor effect on hover over links
      // const links = document.querySelectorAll('a,button');

      // links.forEach(link => {
      //   link.addEventListener('mouseenter', e => {
      //     this.cursorTrailing.current.classList.add('enlarged');
      //   })
      //   link.addEventListener('mouseout', e => {
      //     this.cursorTrailing.current.classList.remove('enlarged')
      //   })
      // })

      // window.onmousedown = () => {
      //   this.cursor.current.classList.add('clicked');
      // }
      // window.onmouseup = () => {
      //   this.cursor.current.classList.remove('clicked');
      // }

      navigation = <div><Navigation/></div>;

      imageGallery = (
        <div>
          {/* <div className="cursors">
            <div className="cursor fade-in" ref={this.cursor}/>
            <div className="cursor fade-in" ref={this.cursorTrailing}/>
          </div> */}
          <ImageGallery/>
        </div>
      );

      menu = <div><Menu/></div>;
      locations = <div><Locations/></div>;
      about = <div><About/></div>;
    }
    return (
      <div className="App">
        {navigation}
        {imageGallery}
        {menu}
        {locations}
        {about}
      </div>
    );
  }
}

export default App;
