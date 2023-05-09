import React from "react";

export const Skills = () => {
  return (
    <section id="skills" class="container py-4">
      <div class="row">
        <div class="col">
          {/* <!-- title --> */}
          <div className="mb-3">
            <h3>Here are the few technologies I have been working with.</h3>
          </div>

          {/* <!-- icons --> */}
          <div class="icons">
            <div>
              <i class="fa-brands fa-html5 "></i>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML">
                HTML
              </a>
            </div>
            <div>
              <i class="fa-brands fa-css3-alt "></i>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics">
                CSS
              </a>
            </div>
            <div>
              <i class="fa-brands fa-square-js"></i>{" "}
              <a href="https://www.javascript.com/">JavaScript</a>
            </div>
            <div>
              <i class="fa-brands fa-figma"></i>
              <a href="https://www.figma.com/resources/learn-design/">Figma</a>
            </div>
            <div>
              <i class="fab fa-react"></i>
              <a href="https://reactjs.org/tutorial/tutorial.html">React</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
