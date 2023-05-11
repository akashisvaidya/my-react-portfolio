import React from "react";
import disability from "../assests/disability.jpg";
import project2 from "../assests/pro2.gif";
import project3 from "../assests/pro3.gif";
import pokemon from "../assests/pokemon.gif";
import { PortfolioTabs } from "./projectTabs";
import gif from "../assests/giphy.gif";
export const CollabProjects = () => {
  return (
    <div>
      <div className="container mt-5" id="projects">
        <h2 className="text-center mb-5">
          Projects ideas I'm interested in collaborating on:
        </h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src={disability} alt="project 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">#Disability-Care</h5>
                <p className="card-text">
                  I am volunteering to create a website for a disability service
                  provider to help them reach more clients and related groups.
                  The website will provide information about the services they
                  offer, as well as resources related to NDIS and disability. If
                  you're interested in collaborating, please reach out to me and
                  we can discuss further. Please note that this is a volunteer
                  opportunity.
                </p>
                <a
                  href="#"
                  className="m-2 text-dark  display-6"
                  target="_blank"
                >
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
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src={pokemon} alt="project 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">#Pokemon</h5>
                <p className="card-text">
                  I'm working on a Pokémon application using the Pokémon API,
                  and I'm looking to improve its CSS and add more features. Feel
                  free to check it out on GitHub, and if you're interested in
                  collaborating or can provide any help, please send me an email
                  or DM.
                </p>
                <a
                  href="https://github.com/akashisvaidya/pokemonApi"
                  className="m-2 text-dark display-6"
                  target="_blank"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://akashisvaidya.github.io/pokemonApi/"
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
              <img src={gif} alt="project 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">#Your_Idea</h5>
                <p className="card-text">
                  Open to collaborating on projects aligned with my interests.
                  Let's learn and have fun together. Feel free to reach out with
                  your ideas!"
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
