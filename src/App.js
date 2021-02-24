import React, { Component } from 'react';
import './App.scss';
import Homepage from './Homepage';
import Menu from './Menu';
import Locations from './Locations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // initial state for cursor position
        xMain: 400,
        yMain: 400,
        xTrailing: 400,
        yTrailing: 400
    }
    this.cursor = React.createRef();
    this.cursorTrailing = React.createRef();
    this.animationFrame = null;
  }
  // update cursor position on mouse move
  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    this.moveCursor();
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.animationFrame);
  }
  onMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({
      xMain: clientX,
      yMain: clientY,
    });
  }
  moveCursor = () => {
    const { xMain, yMain, xTrailing, yTrailing } = this.state;
    const xDiff = xMain - xTrailing;
    const yDiff = yMain - yTrailing;
    // number in expression is coefficient of the delay
    this.setState({
      xTrailing: xTrailing + xDiff / 7,
      yTrailing: yTrailing + yDiff / 7,
    },
    () => {
      // usingn refs and transform for better performance
      this.cursor.current.style.transform = `translate3d(${xMain}px, ${yMain}px, 0) translate(-50%, -50%)`;
      this.cursorTrailing.current.style.transform = `translate3d(${xTrailing}px, ${yTrailing}px, 0) translate(-50%, -50%)`;
      this.animationFrame = requestAnimationFrame(this.moveCursor);
    });
  }
  // handleMouseMove = (e) => {
  //     const { clientX, clientY } = e;

  //     this.setState({
  //         xMain: clientX,
  //         yMain: clientY
  //     }, () => {
  //         setTimeout(() => {
  //             this.setState({
  //                 xTrailing: clientX,
  //                 yTrailing: clientY
  //             });
  //         }, 120);
  //     })
  // }

  render() {
    // const {
    //   xMain,
    //   yMain,
    //   xTrailing,
    //   yTrailing
    // } = this.state;
    
    // cursor effect on hover over links
    const cursor = document.querySelector('.cursor:nth-child(2)');
    const cursorClick = document.querySelector('.cursor:nth-child(1)');
    const links = document.querySelectorAll('a,button');

    links.forEach(link => {
      link.addEventListener('mouseenter', e => {
        cursor.classList.add('enlarged');
      })
      link.addEventListener('mouseout', e => {
        cursor.classList.remove('enlarged');
      })
    })

    window.onmousedown = () => {
      cursorClick.classList.add('clicked');
    }
    window.onmouseup = () => {
      cursorClick.classList.remove('clicked');
    }
    return (
      <div className="App">
      {/* onMouseMove={e => {this.handleMouseMove(e)}} */}
        <div className="cursors">
          <div className="cursor fade-in-homepage" ref={this.cursor}/>
          {/* style={{left: xMain, top: yMain}} */}
          <div className="cursor fade-in-homepage" ref={this.cursorTrailing}/>
          {/* style={{left: xTrailing, top: yTrailing}} */}
        </div>
        <Homepage/>
        <Menu/>
        <Locations/>
      </div>
    );
  }
}

export default App;
