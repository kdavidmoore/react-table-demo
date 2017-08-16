import React, { Component } from 'react';
import 'react-table/react-table.css'
import TableWrapper from './components/TableWrapper';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          <TableWrapper />
        </div>
      </div>
    );
  }
}

export default App;
