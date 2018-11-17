import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
//import UserPortfolio from './components/portfolioComponent/UserPortfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header>
          </Header>
          <Main/>
          <Footer />
      </div>
    );
  }
}

export default App;
