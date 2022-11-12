import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <footer class="p-4 text-center">
        Copyright &copy; All Rights Reserved. Made with ❤️ by me 😊.
      </footer>
      <a id="goup" class="up" href="#navbar">
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
};
