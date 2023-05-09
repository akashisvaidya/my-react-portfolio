import React from "react";
import hero from "../assests/hero.jpg";
// import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <>
      <section class="hero">
        <div class="container">
          <div class="row py-5">
            {/* <div class="col-md-6 text-center order-md-2">
              <img
                src="./assests/robbie-down-f3vwAXn7pgg-unsplash-removebg-preview.png"
                alt=""
                width="50%"
              />
            </div> */}
            <div className="col-md-3"></div>
            <div class="col-md-6 mt-5 text-center py-md-5">
              <h2>
                Hi, I'm <span class="fw-bold">Aakash Vaidya</span>
              </h2>
              <div class="mt-2 mb-4 fw-bold hover-effect">
                <h1
                  className="display-2"
                  initial={{ y: -100 }}
                  animate={{ scale: 1.5, y: 0 }}
                  transition={{ duration: 5 }}
                >
                  Software Engineer
                </h1>
              </div>
              <p>
                I love <span className="fw-bold">coding </span> and{" "}
                <span className="fw-bold">problem solving</span>, and always
                looking for <span className="fw-bold">opportunities </span>to
                learn more and enhance <span className="fw-bold">skills</span>.
              </p>
              {/* <button
                // whileHover={{ scale: 1.6 }}
                class="btn btn-light mt-2"
                id="btn"
              >
                My Resume <i class="fa-solid fa-download"></i>
              </button> */}
              <button class="download-button">
                <div class="docs">
                  <svg
                    class="css-i6dzq1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line y2="13" x2="8" y1="13" x1="16"></line>
                    <line y2="17" x2="8" y1="17" x1="16"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>{" "}
                  Resume
                </div>
                <div class="download">
                  <svg
                    class="css-i6dzq1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line y2="3" x2="12" y1="15" x1="12"></line>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
