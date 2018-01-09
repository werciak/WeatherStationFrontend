import React from 'react';
import {Route, Switch } from 'react-router-dom';
import StronaGlowna from './StronaGlowna';
import All from './All';
import Pierwsza from './Pierwsza';
import Druga from './Druga';
import WynikZGps from './WynikZGps'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={StronaGlowna} />
     
      <Route exact path='/all' component={All} />
      <Route exact path='/druga' component={Druga} />
      <Route exact path='/pierwsza' component={Pierwsza} />
      <Route exact path="/wynik/:id" component={WynikZGps} />

      
      
      
    </Switch>

  </main>
);

export default Main;