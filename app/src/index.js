import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Logic from './components/Logic';
import Sets from './components/Sets';
import Cuadratic from './components/Cuadratic';
import Polynomial from './components/Polynomial';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const Root = () => (
  <HashRouter>
    <App>  
      <Route exact path="/" component={Home} />
      <Route exact path="/logic" component={Logic} />
      <Route exact path="/sets" component={Sets} />
      <Route exact path="/cuadratic" component={Cuadratic} />
      <Route exact path="/polynomial" component={Polynomial} />
    </App>
  </HashRouter>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
