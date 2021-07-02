import React from "react";
import "../css/Welcome.css";

function Welcome() {
  return (
    <div className="container appBody">
      <div className="row">
        <div className="col-12 my-3">
          <h1 className="mb-3">Welcome to OurNet</h1>
          <p className="my-3">
            OurNet is perfect to be shared with every the members of your troop.
            You can be a part of different troops and access your accounts from
            any device.
            <h4 className="my-3">Next Steps:</h4>
          </p>
        </div>
        <div className="col-12 steps d-flex flex-wrap justify-content-center">
          <div className="col step bg-primary text-light">
            <p>Invite members to YourNet</p>
          </div>
          <div className="col step border">
            <p>Add your next events to your shared calendar</p>
          </div>
          <div className="col step bg-primary text-light">
            <p>Recommend movies, books, recipes, and more</p>
          </div>
          <div className="col step border">
            <p>Share photos and video with your group</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
