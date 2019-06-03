import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/search";
import Create from "./pages/create";
import About from "./pages/about";

function App() {
  return (
    <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/create" component={Create} />
      <Route path="/about" component={About} />
    </div>
  </Router>
  );
}

export default App;
