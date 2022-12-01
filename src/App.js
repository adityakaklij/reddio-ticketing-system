import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Mint from './Components/Mint';
import Deploy from './Components/Deploy';

// import { initReddio, reddio } from '@/utils/config';
import { BrowserRouter as Router, Switch, Route, HashRouter,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Home from './Components/Home';

function App() {
  


  return (
    // <div className="App">
    //   <h1>Home</h1>
    // </div>
    <div className="App">
       
       
    {/* <p> Connected as : {account}</p> */}

    <Router basename='/'>
    {/* <HashRouter > */}
    <div className="App">
  
      <Navbar/>

    <Switch>

        <Route exact path="/" component={Home}>
            {/* <Home/> */}
        </Route>
  

        <Route exact path="/Deploy" component={Deploy}> 
            {/* <OnboardStudent/> */}
        </Route>

        <Route  path="/Mint" component={Mint}>
            {/* <CreateSBT/> */}
        </Route>

        

      </Switch>


  {/* Footer section  */}
    {/* <Footer/> */}
  {/* Footer section  */}


    </div>
    </Router>

  </div>
  
    );
}

export default App;
