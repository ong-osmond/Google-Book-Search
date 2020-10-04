import React from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" id="search" href="/">
            Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="saved" href="/savedBooks">
              Saved
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
