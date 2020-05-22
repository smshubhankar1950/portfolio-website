import React from 'react';
import classes from './App.module.scss';
import Navigation from './Components/Navigation/Navigation'
import Body from './Components/Navigation/Body/Body';
function App() {
  return (
    <div className={classes.App}>
      <Navigation/>
      <Body/>
    </div>
  );
}

export default App;
