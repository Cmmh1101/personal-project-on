import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class NewPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });

    this.setState({
      newPost: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1>News</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Whats in your mind?</Label>
            <Input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="newPost"
              value={this.state.newPost}
            />
          </FormGroup>
          <Button
            type="submit"
            onClick={this.handleClick}
            color="primary"
            size="sm"
          >
            Publish
          </Button>{" "}
        </Form>
      </React.Fragment>
    );
  }
}

export default NewPostForm;
