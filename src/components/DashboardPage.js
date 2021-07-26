import React, { Component } from "react";

import Sidebar from "./SidebarComponent";

import NewPostForm from "./NewPostFormComponent";
import Posts from "./PostsComponent";
import "../css/dashboard.css";

class DashboardPage extends Component {
  state = {
    form: {
      newPost: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex ">
          <Sidebar />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="col-10">
                  <NewPostForm
                    onChange={this.handleChange}
                    formValues={this.state.form}
                  />
                </div>
                <div className="col-10 my-3">
                  <Posts
                  // avatarUrl="./assets/images/userphoto.png"
                  // alt="user profile"
                  // userName="Carla Montano"
                  // post={this.state.form.newPost}
                  // postTime="1:00pm"
                  // postDate="Jul, 15 21"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
