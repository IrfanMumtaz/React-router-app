import React, { Component } from "react";
class Movies extends Component {
    render() {
        const params = this.props.match.params;
        return <h1>{params.category} Movies Component</h1>;
    }
}

export default Movies;
