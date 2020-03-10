import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBarComponent";
import Home from "./components/pages/HomeComponent";
import Movies from "./components/pages/MoviesComponent";
import Softwares from "./components/pages/SofwaresComponent";
import Games from "./components/pages/GamesComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/movies/:category" component={Movies} />
                    <Route path="/softwares">
                        <Softwares />
                    </Route>
                    <Route path="/games">
                        <Games />
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
