import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Logic from './components/Logic';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const Root = () => (
<App>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/logic" component={Logic} />
    </Switch>
  </BrowserRouter>
</App>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
