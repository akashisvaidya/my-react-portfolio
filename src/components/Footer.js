import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="container m-4 p-4">
        <p className="text-sm text-center">
          Thanks for visiting my portfolio website! If you enjoyed your visit,
          please consider helping me spread the word by sharing my website on
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
          or LinkedIn. Your support is greatly appreciated!
        </p>
      </div>

      <footer class="p-4 text-center bg-light mt-3">
        Copyright &copy; All Rights Reserved. Made with ❤️ by me 😊.
      </footer>
    </div>
  );
};
