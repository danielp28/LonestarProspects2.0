import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coach from "./pages/Coach";
import Player from "./pages/Player";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/players" component={Player}/>
          <Route exact path="/coaches" component={Coach}/>
          {/* <Route path="*" component={NoMatch}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
