import React, { Component } from 'react';
import './App.css';
import { Well } from 'react-bootstrap';
import MyNavbar from './components/Navbar.js';
import GoogleMap from './components/GoogleMap.jsx';

const wellStyle = {
  height: 100+'vh',
  margin: 0,
  paddingTop: 80+'px'
};

class App extends Component {

  render() {
    return (

      <div className="App">
        <MyNavbar></MyNavbar>
          <Well style={wellStyle}>
            <GoogleMap></GoogleMap>
          </Well>
      </div>
    );
  }
}

export default App;
