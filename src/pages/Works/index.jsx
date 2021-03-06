import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StudyCases from 'pages/StudyCases'
import Nav from 'components/Nav'

const Works = () => {
  return (
      <Switch>
        <Route path='/works' exact>
          <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
          <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
          <Nav />
        </Route>
        <Route path='/works/:cases'>
          <StudyCases />
        </Route>
      </Switch>
  );
};

export default Works;