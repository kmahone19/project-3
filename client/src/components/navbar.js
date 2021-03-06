import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {

  const style = {
    links: {
      color: "white",
      textDecoration: "none"
    },
    brand: {
      fontSize: 30,
      color: "white",
      textDecoration: "none"
    }
  }

  return (
    <React.Fragment>
      <ul className="nav nav-tabs bg-dark">
        <h1 style={style.brand} className="navbar-brand display-4 m-0 p-0 font-weight-bold bg-dark">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} >
            Book of Grudges
        </Link>
        </h1>
        <li className="nav-item mt-auto">
          <Link
            style={style.link}
            to="/search"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            Search
        </Link>
        </li>
        <li className="nav-item mt-auto">
          <Link
            to="/create"
            className={window.location.pathname === "/create" ? "nav-link active" : "nav-link"}
          >
            Create
        </Link>
        </li>
        <li className="nav-item mt-auto">
          <Link
            to="/about"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About
        </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NavTabs;
