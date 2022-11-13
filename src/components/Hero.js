import React from "react";
import hero from "../assests/hero.jpg";
import { Layout } from "./Layout";
export const Hero = () => {
  return (
    <>
      <Layout>
        <section className="hero py-5">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="./assests/robbie-down-f3vwAXn7pgg-unsplash-removebg-preview.png"
                  alt=""
                  width="50%"
                />
              </div>
              <div className="col-md-6 mt-5 text-center py-md-5">
                Hi, I'm <span className="fw-bold">Aakash Vaidya</span>
                <div className="mt-2 mb-4 fs-3 fw-bold">Software Engineer</div>
                <p>
                  I love coding and problem solving, and always looking for
                  opportunities to learn more and enhance skills.
                </p>
                <button className="btn btn-light mt-2">
                  My Resume <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
