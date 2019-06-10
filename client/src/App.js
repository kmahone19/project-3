import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/search";
import Create from "./pages/create.js";
import About from "./pages/about";
import NavTabs from "./components/navbar"

function App() {
  const imgUrl = "images/paper.jpg"
  const style = {
    bg: {
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  }
  return (
    <Router>
    <div style={style.bg}>
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
