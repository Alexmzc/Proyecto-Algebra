import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './Bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="App-home">
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
