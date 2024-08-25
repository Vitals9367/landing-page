import React from "react";
import NavLink from "../NavLink";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import TriangleDivider from "../TriangleDivider"

function ValueProposition() {
  return (
    <>
      <div className="bg-slate-50">
        <TriangleDivider color=""/>
        <div
          id="details"
          className="lg:max-h-[500px] text-center max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 p-12 rounded-2xl text-white"
        >
          <p className="text-black ml-4 mt-5">
            <span className="text-gray-800 text-3xl font-extrabold sm:text-4xl flex mb-16">
              Scale Faster, Work Smarter, and Maximize Profits with AI Automation
            </span>
            <ul className="text-gray-500 flex justify-center flex-wrap gap-4">
              <li className="p-8 bg-white rounded w-[350px]">
              <h2 className="mb-2 text-lg font-bold">Slash Ticket Volume by 60%</h2>
              Automate handling of over 60% of inquiries, including tracking, returns, refunds, and exchanges.
              </li>
              <li className="p-8 bg-white rounded w-[350px]">
                <h2 className="mb-2 text-lg font-bold">Free 40 Hours Monthly</h2>
                Automate routine tasks to liberate your team’s time for more strategic endeavors. 
                </li>
              <li className="p-8 bg-white rounded w-[350px]">
                <h2 className="mb-2 text-lg font-bold">Save $30K in Payroll Costs</h2>
                Reduce overhead by eliminating the need for an additional agent, optimizing payroll expenses.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <TriangleDivider color="rgb(248 250 252)"/>
    </>
  );
}

export default ValueProposition;
