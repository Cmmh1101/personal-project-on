import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import Sidebar from "./SidebarComponent";
import NewPostModal from "./NewPostModal";
import "../css/dashboard.css";

function DashboardPage() {
  return (
    <React.Fragment>
      <div className="d-flex ">
        <Sidebar />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="my-3">News</h1>
              <div className="col-10">
                <NewPostModal />
              </div>
              <div className="col-10 my-3">
                <div className="bg-light p-3">
                  <div className="col-12 d-flex align-items-center">
                    <div className="user-image">
                      <img
                        src="./assets/images/userphoto.png"
                        alt="user profile"
                      />
                    </div>
                    <div className="user-name ml-3">
                      <strong>Carla Montano</strong>
                      <br />
                      <span className="memo text-secondary">2 hours ago</span>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <p>
                      This is my first comment in OurNet! Welcome let's start
                      our group, invite others, and let's be in touch and plan
                      here!
                    </p>
                  </div>
                  <div className="col-12 mt-3">
                    <i class="fa fa-thumbs-o-up" aria-hidden="true" />
                    <span className="memo"> 5</span>
                  </div>
                  <div className="col-12 mt-3">
                    <Form className="d-flex">
                      <FormGroup className="col-10">
                        <Input
                          type="textarea"
                          name="text"
                          id="exampleText"
                          placeholder="Add comment"
                        />
                      </FormGroup>
                      <div className="col p-0">
                        <Button color="primary" size="sm">
                          Send
                        </Button>{" "}
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashboardPage;
