import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <Navbar fixed="top" bg="light" expand="md" id="navbar" collapseOnSelect>
      <Container fluid>
        <Link to="/">
          <a class="navbar-brand" href="#">
            <code>&lt;--Go to Home page-- &gt;</code>
          </a>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/aboutme">
              About Me
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  // return (
  //   <div>
  //     <div id="navbar">
  //       <nav class="navbar bg-light navbar-expand-md fixed-top">
  //         <div class="container-fluid">
  //           <a class="navbar-brand" href="#">
  //             <code>&lt;--Go to Home page-- &gt;</code>
  //           </a>
  //           <button
  //             class="navbar-toggler"
  //             type="button"
  //             data-bs-toggle="collapse"
  //             data-bs-target="#navbarSupportedContent"
  //             aria-controls="navbarSupportedContent"
  //             aria-expanded="false"
  //             aria-label="Toggle navigation"
  //           >
  //             <span class="navbar-toggler-icon"></span>
  //           </button>
  //           <div
  //             class="collapse navbar-collapse nav"
  //             id="navbarSupportedContent"
  //           >
  //             <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
  //               <li class="nav-item">
  //                 <a class="nav-link active" aria-current="page" href="#skills">
  //                   Skills
  //                 </a>
  //               </li>
  //               <li class="nav-item">
  //                 <a class="nav-link" href="#projects">
  //                   Projects
  //                 </a>
  //               </li>
  //               <li class="nav-item">
  //                 <a class="nav-link" href="#about">
  //                   About Me
  //                 </a>
  //               </li>
  //               <li class="nav-item">
  //                 <a class="nav-link" href="#contact">
  //                   Contact
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </nav>
  //     </div>
  //   </div>
  // );
};
