import React from "react";
import portfolio from "../assests/portfolio.gif";
import dictionary from "../assests/dictionary-app.gif";
import notList from "../assests/not-todo.gif";
export const FinishedProjects = () => {
  return (
    <div>
      <div className="container mt-5" id="projects">
        <h2 className="text-center mb-5">Projects I have worked on.</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src={portfolio} alt="project 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">#My-Portfolio-Project</h5>
                <p className="card-text">
                  This portfolio project showcases my skills in HTML, CSS,
                  React, and Bootstrap. The website design was created using
                  Bootstrap, and the interactivity and functionality were
                  implemented using React. The project includes several
                  features, such as a responsive design, smooth scrolling, and
                  social media sharing buttons. It also incorporates my personal
                  style and creativity, with custom icons and graphics
                  throughout.
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
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src={dictionary} alt="project 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">#My-Dictionay</h5>
                <p className="card-text">
                  This dictionary webapp is a project I created using HTML, CSS,
                  JavaScript, and a dictionary API. The webapp allows users to
                  search for words and displays their definitions, synonyms, and
                  examples of usage. I designed the webapp with a clean and
                  intuitive interface to provide a seamless user experience. It
                  was a challenging yet rewarding project that allowed me to
                  improve my skills in web development and API integration.
                </p>
                <a
                  href="https://github.com/akashisvaidya/dictionary-app-api-"
                  className="m-2 text-dark display-6"
                  target="_blank"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://akashisvaidya.github.io/dictionary-app-api-/"
                  className="m-2 text-dark display-6"
                  target="_blank"
                >
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
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src={notList} alt="project 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">#Don't-Do-It</h5>
                <p className="card-text">
                  This app was designed to help users track how they spend their
                  time and identify patterns in their activities. Using React, I
                  created a user-friendly interface that allows users to log
                  thier daily routines and evaluate whether they are beneficial
                  or not. By analyzing the data, users can make informed
                  decisions about how to optimize their time and improve
                  productivity.
                </p>
                <a href="#" className="m-2 text-dark display-6" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" className="m-2 text-dark display-6" target="_blank">
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
