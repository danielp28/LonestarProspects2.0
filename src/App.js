import React from "react";
import Coach from "./pages/Coach";
import Player from "./pages/Player";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/players" component={Player}/>
          <Route exact path="/coaches" component={Coach}/>
          {/* <Route path="*" component={NoMatch}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
