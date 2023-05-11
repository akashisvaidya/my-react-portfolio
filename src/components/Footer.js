import React from "react";
import { Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <div className="container m-4 p-4">
        <div className="row">
          <div className="col">
            <p className="text-center">
              Thanks for visiting my portfolio website! If you enjoyed your
              visit, please consider helping me spread the word by sharing my
              website on
              <span>
                <a
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.akashvaidya.com%2F&text=Check%20out%20Aakash%20Vaidya's%20Website!"
                  target="_blank"
                  rel="noopener"
                  className="text-decoration-none text-success"
                >
                  {" "}
                  Twitter{" "}
                </a>
              </span>
              or{" "}
              <span>
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.akashvaidya.com%2F"
                  target="_blank"
                  rel="noopener"
                  className="text-decoration-none text-success"
                >
                  {" "}
                  LinkedIn{" "}
                </a>
              </span>
              . Your support is greatly appreciated!
            </p>
          </div>
          <div className="col">
            <Nav className=" d-flex justify-content-center align-items-center">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#contact">Connect</Nav.Link>
            </Nav>
          </div>
        </div>
      </div>

      <footer class="p-4 text-center bg-light mt-3">
        Copyright &copy; All Rights Reserved. Made with ❤️ by me 😊.
      </footer>
    </div>
  );
};
