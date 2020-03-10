import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="navbar-brand" to="/">
                    My Blog Application
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            id="navbardrop"
                            href="#"
                            data-toggle="dropdown"
                        >
                            Movies
                        </a>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/movies/Indian">
                                Indian Movies
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/movies/Pakistani"
                            >
                                Pakistani Movies
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="/movies/English"
                            >
                                English Movies
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/games">
                            Games
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/softwares">
                            Softwares
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
