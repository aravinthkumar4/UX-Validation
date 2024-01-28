import React from "react";
import Navbar from "../../Components/Navbar";

export const Home = () => {
  return (
    <div className="bg-gray-950 flex flex-col pb-12 h-screen">
      <header className="w-full py-4 max-md:max-w-full max-md:px-5">
        <Navbar />
      </header>
      <div className="items-center self-center flex w-[1260px] max-w-full flex-col -mt-1.5 pt-12 px-16 max-md:px-5">
        <div className="flex w-[822px] max-w-full flex-col mt-1.5">
          <div className="justify-center items-center border backdrop-blur-[6px] bg-white bg-opacity-10 self-center flex gap-1 px-2.5 rounded-3xl border-solid border-white border-opacity-10">
            <div className="animate-slidein [--slidein-delay:300ms] opacity-0 text-stone-50 text-sm font-medium leading-7 grow whitespace-nowrap">
              Introducing Linear Asks
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-white text-center text-7xl font-medium leading-[80px] self-stretch mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Linear is a better way
            <br />
            to build products
          </h1>
          <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-slate-300 text-center text-2xl leading-7 max-w-[612px] self-center mt-7 max-md:max-w-full">
            Meet the new standard for modern software development.
            <br />
            Streamline issues, sprints, and product roadmaps.
          </p>
          <div className="justify-center items-center bg-indigo-500 hover:scale-110 duration-300 cursor-pointer self-center flex gap-0.5 mt-12 pl-5 pr-3 py-2.5 rounded-3xl max-md:mt-10">
            <div className="animate-slidein [--slidein-delay:700ms] opacity-0 text-white text-base font-medium leading-8 grow whitespace-nowrap">
              Get started
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="items-center self-center flex w-[1260px] max-w-full flex-col mt-10 mb-60 px-8 max-md:my-10 max-md:px-5">
        <div className="justify-center text-stone-50 text-center text-2xl leading-7 max-w-[528px] max-md:max-w-full">
          Powering the world’s best product teams.
          <br />
          <h6 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-stone-50">
            From next-gen startups to established enterprises.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
