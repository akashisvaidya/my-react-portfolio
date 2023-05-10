import React from "react";
import Marquee from "react-fast-marquee";

export const Skills = () => {
  return (
    <section id="skills" class="container py-4">
      {/* <!-- title --> */}
      <div className="mb-3">
        <h3>Here are the few technologies I have been working with.</h3>
      </div>
      {/* <!-- icons --> */}
      <Marquee className="icons ">
        <i className="fa-brands fa-html5 m-2"></i>
        <i className="fa-brands fa-css3-alt  m-2"></i>
        <i className="fa-brands fa-square-js m-2"></i>{" "}
        <i className="fa-brands fa-figma m-2"></i>
        <i className="fab fa-react m-2"></i>
      </Marquee>
    </section>
  );
};
