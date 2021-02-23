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
  }
  // update cursor position on mouse move
  handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      this.setState({
          xMain: clientX,
          yMain: clientY
      }, () => {
          setTimeout(() => {
              this.setState({
                  xTrailing: clientX,
                  yTrailing: clientY
              });
          }, 120);
      })
  }

  render() {
    const {
      xMain,
      yMain,
      xTrailing,
      yTrailing
    } = this.state;
    
    // cursor effect on hover over links
    const cursor = document.querySelector('.cursor:nth-child(2)')
    const cursorClick = document.querySelector('.cursor:nth-child(1)')
    const links = document.querySelectorAll('a,button')

    links.forEach(link => {
      link.addEventListener('mouseenter', e => {
        cursor.classList.add('enlarged')
      })
      link.addEventListener('mouseout', e => {
        cursor.classList.remove('enlarged')
      })
      
      // document.addEventListener('mousedown', e => {
      //   cursorClick.classList.add('clicked')
      // })
      // document.addEventListener('mouseup', e => {
      //   cursorClick.classList.remove('clicked')
      // })
    })
    return (
      <div className="App" onMouseMove={e => {this.handleMouseMove(e)}}>
        <div className="cursors">
          <div className="cursor fade-in-homepage" style={{left: xMain, top: yMain}}/>
          <div className="cursor fade-in-homepage" style={{left: xTrailing, top: yTrailing}}/>
        </div>
        <Homepage/>
        <Menu/>
        <Locations/>
      </div>
    );
  }
}

export default App;
