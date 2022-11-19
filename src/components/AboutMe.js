import React from "react";

export const AboutMe = () => {
  return (
    <>
      <section id="about" class="container py-5">
        <div class="title">
          <span>ABOUT ME</span>
        </div>
        <div class="row text-center">
          <div class="col-md-5 mb-1">
            <img
              src="./assests/drew-hays-Kt8eGw8_S8Y-unsplash-removebg-preview.png"
              alt=""
              width="60%"
            />
          </div>
          <div class="col-md-7 py-md-5">
            <p>
              I am a full-stack software engineer who loves coding,
              problem-solving, and learning about new topics. <br></br>I love
              discussing ideas, talking to other people, and getting to know
              their perspectives and thoughts on various topics, <br></br>{" "}
              whether it be coding, data structure, algorithms, VS-code
              shortcuts, the universe, poetry, life, the arts, philosophy, etc.
              <br></br> If I am not coding or listening to a podcast, I am
              watching a comedy special, reading a book, or annoying my
              beautiful wife. <br></br>
              You are welcome to get in touch with me to discuss your web
              development needs or to share some jokes; I won't mind either. See
              ya. 😁 .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
