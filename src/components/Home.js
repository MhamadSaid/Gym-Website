import React from "react";

import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home" className="Bg-home">
      <div className="h-screen flex justify-center items-center">
        <div className="container text-centertext-white font-bold">
          <div className="bottom-2 TextContainer">
            <div className="flex flex-col mt-44 items-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5">
                Unleash the Warrior Within
              </h2>
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6">
                Your Path to Unrivaled Fitness
              </h1>
              <p>
                <Link
                  to="about"
                  className="btn btn-md md:text-xl lg:text-xl xl:text-2xl py-2 mb-6 cursor-pointer"
                >
                  Explore Programs
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
