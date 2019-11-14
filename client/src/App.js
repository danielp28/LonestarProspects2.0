import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Coach from "./views/pages/Coach";
import Player from "./views/pages/Player";
import Home from "./views/pages/Home";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css.map";
import "./assets/css/paper-kit.css"
import "./assets/css/paper-kit.css.map"
import "./assets/css/paper-kit.min.css"
// import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";
// import Login from "./pages/Login";
// import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Nav";
import ProfilePage from "./views/pages/ProfilePage";




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
          <Route exact path="/profile-page" component={ProfilePage}/>
          {/* <Route path="*" component={NoMatch}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
