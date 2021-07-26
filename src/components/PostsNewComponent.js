import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

class PostsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
  };
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    // const avatar = "";
    // const userName = "Carla Montano";
    // const post =
    //   "This is my first comment in OurNet! Welcome let's start our group";
    // const postTime = "1:00pm";
    // const postDate = "Mon, 15 2021";

    return (
      <React.Fragment>
        <div className="bg-light p-3">
          <div className="col-12 d-flex align-items-center">
            <div className="user-image">
              <img src={this.props.avatarUrl} alt={this.props.alt} />
            </div>
            <div className="user-name ml-3">
              <strong>{this.props.userName}</strong>
              <br />
              <span className="memo text-secondary">
                {this.props.postDate} - {this.props.postTime}
              </span>
            </div>
          </div>
          <div className="col-12 mt-3">
            <p>{this.props.post}</p>
          </div>
          <div className="col-12 mt-3">
            <i className="fa fa-thumbs-o-up" aria-hidden="true" />
            <span className="memo"> 5</span>
          </div>
          <div className="col-12 mt-3">
            <Form onSubmit={this.handleSubmit} className="d-flex">
              <FormGroup className="col-10">
                <Input
                  onChange={this.handleChange}
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="Add comment"
                  value={this.state.newPost}
                />
              </FormGroup>
              <div className="col p-0">
                <Button
                  type="submit"
                  onClick={this.handleClick}
                  color="primary"
                  size="sm"
                >
                  Reply
                </Button>{" "}
              </div>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostsNew;
