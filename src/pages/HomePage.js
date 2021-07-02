import React from "react";
import Sidebar from "../components/SidebarComponent";
import Welcome from "../components/WelcomeComponent";

function HomePage() {
  return (
    <React.Fragment>
      <div className="d-flex ">
        <Sidebar />
        <div className="container">
          <div className="row">
            <div className="col">
              <Welcome />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
