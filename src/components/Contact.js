import React from "react";
import { Layout } from "./Layout";

export const Contact = () => {
  return (
    <>
      <Layout>
        <section id="contact" class="container-fluid contact py-5">
          <div class="title">
            <span>Contact Me</span>
          </div>
          {/* <!-- icons to contact --> */}
          <div class="row">
            <div class="col fa-3x d-flex justify-content-around">
              <a href="">
                <i class="fa-solid fa-envelope text-light"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin text-light"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-git text-light"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram text-light"></i>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
