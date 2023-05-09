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
              I am a full-stack software engineer who loves coding,
              problem-solving, and learning about new topics.I love discussing
              ideas, talking to other people, and getting to know their
              perspectives and thoughts on various topics, whether it be coding,
              data structure, algorithms, VS-code shortcuts, the universe,
              poetry, life, the arts, philosophy, etc. If I am not coding or
              listening to a podcast, I am watching a comedy special, reading a
              book, or annoying my beautiful wife.You are welcome to get in
              touch with me to discuss your web development needs or to share
              some jokes; I won't mind either.
            </p>
            <Skills />
          </div>
        </div>
      </section>
    </>
  );
};
