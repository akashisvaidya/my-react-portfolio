import React from "react";

export const Contact = () => {
  const clickOnHandle = (event) => {
    alert("Temporarily Deactivated, but check my LinkedIn 😜");
    event.preventDefault();
  };

  return (
    <>
      <section id="contact" class="container-fluid contact py-5">
        <div class="title">
          <span>Contact Me</span>
        </div>
        {/* <!-- icons to contact --> */}
        <div class="row ">
          <div class="col fa-3x d-flex justify-content-around">
            <a href="">
              <i class="fa-solid fa-envelope text-light contact-icons"></i>
            </a>
            <a href="https://www.linkedin.com/in/aakashvaidya/" target="_blank">
              <i class="fa-brands fa-linkedin text-light contact-icons"></i>
            </a>
            <a href="https://github.com/akashisvaidya" target="_blank">
              <i class="fa-brands fa-square-git text-light contact-icons"></i>
            </a>
            <a href="">
              <i
                class="fa-brands fa-instagram text-light contact-icons"
                onClick={clickOnHandle}
              ></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
