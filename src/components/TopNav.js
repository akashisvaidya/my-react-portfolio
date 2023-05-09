import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const TopNav = () => {
  return (
    <div id="navbar">
      <Navbar fixed="top" bg="light" expand="md" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="#">
            <a class="navbar-brand" href="#">
              <code>&lt;--Go to Home page-- &gt;</code>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 md-nav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
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
