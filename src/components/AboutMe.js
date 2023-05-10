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
              I'm a full-stack software engineer who's passionate about coding,
              problem-solving, and learning new things. I love discussing ideas
              and exploring different perspectives, whether it's related to
              coding, data structures, algorithms, or more philosophical areas
              like the arts, life, and the potential of AI. When I'm not coding
              or listening to podcasts, I enjoy spending time with my loved ones
              and doing activities that help me maintain a healthy work-life
              balance, like watching comedy specials, reading books, and
              exploring new places. If you need help with your web development
              needs, feel free to reach out to me. And if you just want to chat
              and share some jokes, I'm always up for that too!
            </p>

            <Skills />
          </div>
        </div>
      </section>
    </>
  );
};
