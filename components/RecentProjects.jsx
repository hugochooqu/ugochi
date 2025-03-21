import React from "react";
import { projects } from "../data";

import { FaArrowUpRightDots, FaArrowUpRightFromSquare } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div
      className="pt-4 max-w-7xl mx-auto w-full px-12 md:px-20 text-lg text-gray-400 flex flex-col gap-6 text-white "
    >
      <h1 className="lg:hidden text-4xl text-teal-300 pb-12">Projects</h1>

      {projects.map((project, index) => (
        <div
          className="border border-gray-700 w-full h-auto rounded-xl py-10 px-5"
          key={index}
        >
          <a
            href={project.link}
            _blank
            className="flex flex-row gap-2 hover:text-teal-300 text-xl"
          >
            {project.title}{" "}
            <span>
              <FaArrowUpRightDots />
            </span>
          </a>
          <p className="text-gray-400">{project.des}</p>
          <br />
          <div className="w-auto h-[40%] overflow-hidden  rounded-xl">
            <img src={project.img} className="object-cover" />
          </div>
          <div className="flex gap-4 sm:gap-8 flex-wrap pt-16">
          {project.iconLists.map((list, idx) => (
            <div
              key={idx}
              className="border border-teal-300 rounded-2xl py-2 px-4 lg:py-1 lg:px-6 text-sm lg:text-base"
            >
              {list}
            </div>
          ))}
        </div>
        </div>
      ))}
    </div>
  );
};

export default RecentProjects;
