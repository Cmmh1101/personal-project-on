import React from "react";
import { Jumbotron, Button } from "reactstrap";

function Hero(props) {
  return (
    <React.Fragment>
      <Jumbotron className="landing-hero">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <h1 className="display-3">
                  OurNet,
                  <br />
                  <span className="orange-span"> YourNet Organizer</span>!
                </h1>
                <p className="lead">
                  OurNet is the best place to keep track of important events,
                  news, recommentations, plan, and more!
                </p>
                <p className="lead">
                  <Button color="primary">Sign up - OurNet is Free!</Button>
                </p>
              </div>
            </div>
            <div className="col-6">
              <div>
                <img
                  className="img-fluid"
                  src="/assets/images/phone.png"
                  alt="Phone"
                />
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Hero;
