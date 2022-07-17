import React from "react";
import "./style.scss";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-0 pt-2">
      <div className="container-fluid">
        <div className="logo_container d-flex gap-2 align-items-center">
          <a href="/">
            <i className="fa-solid fa-bars"></i>
          </a>
          <div className="image">
            <img src="./images/logo.jpg" className="img-fluid" alt="logo" />
          </div>
          <a className="navbar-brand text-uppercase  pt-0" href="/">
            Civilsoft <span>Hcms</span>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle bill"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-bell"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item p-0 d-flex align-items-center justify-content-center">
              <div className="image overflow-hidden rounded-circle">
                <img
                  src="./images/logo.jpg"
                  className="img-fluid"
                  alt="person"
                />
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Amila Udana
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
