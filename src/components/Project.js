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
              <a href="#" className="m-2 text-dark display-6">
                <i class="fa-regular fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img src={project2} alt="project 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">#Project2</h5>
              <p className="card-text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="m-2 text-dark display-6">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#" className="m-2 text-dark display-6">
                <i class="fa-brands fa-chrome"></i>
              </a>
              <a href="#" className="m-2 text-dark display-6">
                <i class="fa-regular fa-paper-plane"></i>
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20this%20project%20built%20by%20Akash%20and%20visit%20his%20website%20at%20akashvaidya.com&url=https%3A%2F%2Fexample.com%2Fproject"
                target="_blank"
              >
                Share on Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img src={project3} alt="project 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">#Project3</h5>
              <p className="card-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <a href="#" className="m-2 text-dark display-6">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#" className="m-2 text-dark display-6">
                <i class="fa-brands fa-chrome"></i>
              </a>
              <a href="#" className="m-2 text-dark display-6">
                <i class="fa-regular fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
