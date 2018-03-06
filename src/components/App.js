import React, { Component } from 'react';
import 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <button className="button">
          Default
        </button>
        <button className="button button--state--success">
          Success
        </button>
        <button className="button button--state--danger">
          Danger
        </button>
      </div>
    );
  }
}

export default App;
