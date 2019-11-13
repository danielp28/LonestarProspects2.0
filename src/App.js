import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Coach from "./pages/Coach";
import Player from "./pages/Player";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Nav";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <Router>
      <div>
      
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>

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
