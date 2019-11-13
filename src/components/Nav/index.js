import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <h3>Home</h3>
      </a>
      <a className="navbar-brand" href="/players">
        Recruits
      </a>
      <a className="navbar-brand" href="/coaches">
        Coaches
      </a>
    </nav>
  );
}

export default Nav;
