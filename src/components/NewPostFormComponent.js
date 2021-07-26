import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class NewPostForm extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {};
  // handleChange = (e) => {
  //   console.log({
  //     name: e.target.name,
  //     value: e.target.value,
  //   });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <h1>News</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Whats in your mind?</Label>
            <Input
              onChange={this.props.onChange}
              className="form-control"
              type="textarea"
              name="newPost"
              value={this.props.formValues.newPost}
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
