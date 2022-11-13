import React from "react";
import { Layout } from "./Layout";

export const Skills = () => {
  return (
    <Layout>
      <section id="skills" className="container py-4">
        <div className="row">
          <div className="col">
            {/* <!-- title --> */}
            <div className="title">
              <span>Skills</span>
            </div>

            {/* <!-- icons --> */}
            <div className="icons">
              <div>
                <i className="fa-brands fa-html5 "></i>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
                  target="_blank"
                >
                  HTML
                </a>
              </div>
              <div>
                <i className="fa-brands fa-css3-alt "></i>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"
                  target="_blank"
                >
                  CSS
                </a>
              </div>
              <div>
                <i className="fa-brands fa-square-js"></i>
                <a href="https://www.javascript.com/" target="_blank">
                  JavaScript
                </a>
              </div>
              <div>
                <i className="fa-brands fa-figma"></i>
                <a
                  href="https://www.figma.com/resources/learn-design/"
                  target="_blank"
                >
                  Figma
                </a>
              </div>
              <div>
                <i className="fab fa-react"></i>
                <a
                  href="https://reactjs.org/tutorial/tutorial.html"
                  target="_blank"
                >
                  React
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
