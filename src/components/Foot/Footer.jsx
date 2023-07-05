import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="bg-auto bg-main h-24 flex items-center justify-between">
        <a
          href="https://api-ninjas.com/api/trivia"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-2xl text-white font-semibold ml-8">API</h1>
        </a>
        <p className="text-white">
          By{" "}
          <a
            className="font-semibold mr-8"
            href="https://github.com/LeandroCantero/trabajo-final"
            target="_blank"
            rel="noreferrer"
          >
            Cantero Leandro
          </a>
        </p>
      </div>
    </div>
  );
};
