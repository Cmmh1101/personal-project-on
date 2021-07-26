import React, { Component } from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

class Posts extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="btn btn-primary" size="sm">
          New Badge
        </Link>{" "}
      </React.Fragment>
    );
  }
}

export default Posts;
