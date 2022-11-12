import React from "react";
import hero from "../assests/hero.jpg";
export const Hero = () => {
  return (
    <>
      <section class="hero">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-6 text-center order-md-2">
              <img
                src="./assests/robbie-down-f3vwAXn7pgg-unsplash-removebg-preview.png"
                alt=""
                width="50%"
              />
            </div>
            <div class="col-md-6 mt-5 text-center py-md-5">
              Hi, I'm <span class="fw-bold">Aakash Vaidya</span>
              <div class="mt-2 mb-4 fs-3 fw-bold">Software Engineer</div>
              <p>
                I love coding and problem solving, and always looking for
                opportunities to learn more and enhance skills.
              </p>
              <button class="btn btn-light mt-2">
                My Resume <i class="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
