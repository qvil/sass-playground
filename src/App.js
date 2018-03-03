import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="parent--div">
        <div className="child--div content" id="div1" >
          <div className="seed" />
          <div className="seed" />
          <div className="seed" />
          <div className="seed" />
          <div className="seed" />
        </div>
        <div className="child--div" id="div2" >
          <div className="stripe" />
          <div className="stripe" />
          <div className="stripe" />
          <div className="stripe" />
          <div className="stripe" />
          <div className="stripe" />
          <div className="stripe" />
          <div className="stripe" />
          <div className="stripe" />
        </div>
      </div>
    );
  }
}

export default App;
