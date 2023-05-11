import React from "react";
import github from "../assests/github.svg";
import linkedIn from "../assests/linkedIn.svg";
import insta from "../assests/insta.svg";
export const ContactForm = () => {
  return (
    <div className="container">
      <div className="row bg-light p-3">
        <div className="col-lg-4 mx-auto p-5 m-5 text-center">
          <h3>Lets Start a converation.</h3>
          <h5>Reach me out on:</h5>
          <span className="navbar-text">
            <div className="social-icon ">
              <a href="#" className="p-2">
                <img src={github} alt="" />
              </a>
              <a href="#" className="p-2">
                <img src={linkedIn} alt="" />
              </a>
              <a href="#" className="p-2">
                <img src={insta} alt="" />
              </a>
            </div>
          </span>
        </div>
        <div className="col-lg-8 ">
          <p className="text-center">
            Whether you have a project in mind or just want to chat, I'd love to
            hear from you. I'll get back to you ASAP.
          </p>
          <form
            action="https://formsubmit.co/2ca569adc31f0d91e47d942f56419f95 "
            method="POST"
          >
            <div class="form-group mb-2">
              <label for="Name">Name</label>
              <input
                name="Name"
                type="text"
                class="form-control"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div class="form-group mb-2">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                name="Email"
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
              />
            </div>
            <div class="form-group mb-2">
              <label for="Subject">Subject</label>
              <input
                name="Subject"
                type="text"
                class="form-control"
                placeholder="Subject"
              />
            </div>
            <div class="form-group mb-2">
              <label for="exampleFormControlTextarea1">Your Message:</label>
              <textarea name="Message" class="form-control" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
