import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import NotFoundPage from './components/NotFoundPage';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={HomePage} path="/" exact={true} />
          <Route component={Gallery} path="/gallery" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
