import React from "react";
import hero from "../assests/hero.jpg";
import { motion } from "framer-motion";
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
              <h2>
                Hi, I'm <span class="fw-bold">Aakash Vaidya</span>
              </h2>
              <div class="mt-2 mb-4 fw-bold">
                <motion.h1
                  className="display-2"
                  initial={{ y: -100 }}
                  animate={{ scale: 1.5, y: 0 }}
                  transition={{ duration: 5 }}
                >
                  Software Engineer
                </motion.h1>
              </div>
              <p>
                I love coding and problem solving, and always looking for
                opportunities to learn more and enhance skills.
              </p>
              <motion.button
                whileHover={{ scale: 1.6 }}
                class="btn btn-light mt-2"
                id="btn"
              >
                My Resume <i class="fa-solid fa-download"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
