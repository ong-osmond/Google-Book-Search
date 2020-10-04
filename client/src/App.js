import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/savedBooks" component={Saved} />
              <Route exact path="/books/:id" component={null} />
              <Route component={null} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
