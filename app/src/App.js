import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './Bootstrap.css';
import './App.css';
import 'animate.css/animate.min.css'

class App extends Component {
  render() {
    return (
      <div className="App fadeIn animated">
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
