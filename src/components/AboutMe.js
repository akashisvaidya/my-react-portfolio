import React from "react";
import { Skills } from "./Skills";
import akashisvaidya from "../assests/akashisvaidya.png";
export const AboutMe = () => {
  return (
    <>
      <section id="about" class="container py-5">
        <div class="title">
          <span>ABOUT ME</span>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <img src={akashisvaidya} alt="" width="100%" />
          </div>
          <div class="col-md-8 py-md-3 text-center">
            <p>
              As a <span className="color-green">learner</span> and explorer, I
              enjoy discussing ideas from various perspectives, including
              coding, <span className="color-green">data structures</span>,{" "}
              <span className="color-green">algorithms</span>, as well as the
              arts, life, and the potential of{" "}
              <span className="color-green">AI</span>. When I'm not engaged in
              these activities, I spend time with loved ones, watching{" "}
              <span className="color-green">comedy</span> specials, reading{" "}
              <span className="color-green">books</span>, listening to{" "}
              <span className="color-green">podcasts</span> and exploring new
              places to maintain a healthy work-life balance.
            </p>

            <Skills />
          </div>
        </div>
      </section>
    </>
  );
};
