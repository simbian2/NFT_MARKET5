import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import Aside from './components/Aside';
import {
  Contact,
  Explore,
  MyCollection,
  Authors,
  CreateItem,
  Home,
  SignIn,
  ConnectWallet,
  Explore2,
  ItemDetails,
  SignUp,
} from './pages';

import './assets/css/style.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  useEffect(() => {
    window.document.body.classList.add('g-sidenav-show');
    window.document.body.style.backgroundColor = '#f8f9fa !important';
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>NFT Marketplace</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossorigin="anonymous"
        />
      </Helmet>

      <Aside />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/explore" component={Explore} />
        <Route path="/mycollection" component={MyCollection} />
        <Route path="/authors" component={Authors} />
        <Route path="/createitem" component={CreateItem} />
        <Route path="/signin" component={SignIn} />
        <Route path="/connectwallet" component={ConnectWallet} />
        <Route path="/explore2" component={Explore2} />
        <Route path="/itemdetails/:id" component={ItemDetails} />
        <Route path="/itemdetails" component={ItemDetails} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
