import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="bg-auto shadow-2xl bg-semiWhite h-24 flex items-center justify-center ">
        <a href="/" className="flex items-center">
          <img
            src={require("./quiz.webp")}
            alt="logo-trivia-loca"
            className="w-14 h-auto"
          />
          <h1 className="text-3xl text-main align-middle	ml-2 ">Trivia Loca</h1>
        </a>
      </div>
    </div>
  );
};

export default Header;
