import React, { Component } from "react";

class Games extends Component {
    state = {};
    render() {
        console.log(this.props.match);
        return <h1>Games Component</h1>;
    }
}

export default Games;
