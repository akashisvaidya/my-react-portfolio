import React from "react";
import project from "../assests/project.jpg";
// import project from "../assests/project.jpg";
import computer from "../assests/computer.gif";
import project2 from "../assests/pro2.gif";
import project3 from "../assests/pro3.gif";
export const Project = () => {
  return (
    <div className="container mt-5" id="projects">
      <h2 className="text-center mb-5">Projects I have worked on.</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img src={computer} alt="project 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">#Project1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
  );
};
