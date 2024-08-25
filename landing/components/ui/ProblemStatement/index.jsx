import React from "react";
import NavLink from "../NavLink";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import TiltDivider from "../TiltDivider";

function ProblemStatement() {
  return (
    <>
      <div className="bg-blue-600">
        <TiltDivider color="white"/>
        <div
          id="details"
          className="text-white lg:max-h-[500px] flex gap-4 flex-col sm:flex-row sm:overflow-hidden justify-center max-w-screen-xl mx-auto px-4 md:px-8 p-12 rounded-2xl text-white"
        >
          <p className="text-white ml-4 mt-5">
            <span className="drop-shadow-md text-white text-3xl font-extrabold sm:text-4xl flex mb-10">
              Is Your Business Stuck in Manual Overdrive?
            </span>
            <ul className="text-gray-100">
              <li className="drop-shadow-md p-2 flex items-center gap-2">
                <PiArrowBendDownRightBold /> 
                You're spending countless hours on repetitive tasks that drain your energy and resources.
              </li>
              <li className="drop-shadow-md p-2 flex items-center gap-2">
                <PiArrowBendDownRightBold />
                Your customer support is overwhelmed, leading to missed opportunities and frustrated customers.
                </li>
              <li className="drop-shadow-md p-2 flex items-center gap-2">
                <PiArrowBendDownRightBold />
                Lead generation is hit-or-miss, leaving money on the table
              </li>
            </ul>
            <p className="mt-10 text-lg">We can help <strong>You</strong>!</p>
          </p>
          <img
            className="shadow-lg mr-4 lg:w-[500px] h-[400px] sm:w-[500px] h-[400px]  rounded-md sm:mb-0 hidden md:block"
            src="breaking-robot.jpeg"
            
          ></img>
        </div>
      
      </div>
      <TiltDivider color="rgb(37 99 235)"/>
    </>

  );
}

export default ProblemStatement;
