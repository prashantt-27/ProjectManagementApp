import React from "react";
import About from "./About";

const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-500 to-indigo-300 flex flex-col md:flex-row items-center justify-center min-h-166 text-black px-10">
        <div className="md:w-1/2 space-y-6 mx-7">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Take Control of Your Projects Effortlessly
          </h1>
          <p className="text-lg text-black-100">
            Track progress, prioritize tasks, and streamline your workflow with
            ease
          </p>
          <button className="bg-white rounded-lg px-6 py-3 text-purple-600 font-semibold hover:bg-gray-100 transition">
            Explore Now
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/436/050/original/project-management-strategic-plan-to-manage-resources-for-development-working-process-and-schedule-task-completion-concept-smart-businessman-project-manager-manage-multiple-project-dashboards-vector.jpg"
            alt=""
            className="w-80 md:w-96 animate-bounce"
          />
        </div>
      </section>
      <About />
    </>
  );
};

export default Hero;
