import React from "react";
import ft from "../assests/Ft.png";

export const OngoingProjects = () => {
  return (
    <div>
      <div className="container mt-5" id="projects">
        <h2 className="text-center mb-5">
          Projects I am cureently working on.
        </h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src={ft} alt="project 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">#Budget-helper</h5>
                <p className="card-text">
                  I am developing an application to help users track their
                  income and expenses in order to make informed financial
                  decisions. Currently, I am focused on building the client side
                  of the application. Once the client side is completed, I will
                  move on to developing the server side.
                </p>
                <a href="#" className="m-2 text-dark  display-6">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" className="m-2 text-dark display-6">
                  <i class="fa-brands fa-chrome"></i>
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Visit%20Akash%27s%20website%20and%20check%20his%20projects%3A%20https%3A%2F%2Fakashvaidya.com"
                  target="_blank"
                  className="m-2 text-dark display-6"
                >
                  <i class="fa-regular fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
