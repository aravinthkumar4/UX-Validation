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
              Introducing UX ValidateHub
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
            UX ValidateHub -
            <br />
            Your Trusted Partner
          </h1>
          <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-slate-300 text-center text-2xl leading-7 max-w-[612px] self-center mt-7 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
      <div className="items-center self-center flex w-[1260px] max-w-full flex-col my-10 px-8 max-md:my-10 max-md:px-5">
        <div className="justify-center text-stone-50 text-center text-2xl leading-7 max-w-[590px] max-md:max-w-full">
          <h6 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-stone-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap gap-4 mt-18">
        <div class="mx-4 md:mx-0 relative h-11 w-[400px] animate-slidein [--slidein-delay:900ms] opacity-0">
          <input
            type="text"
            name="url"
            placeholder="UX Link"
            className="caret-white text-white peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            UX Link
          </label>
        </div>
        <div className="w-full md:w-20 text-center mx-4 md:mx-0 justify-center items-center bg-indigo-500 hover:scale-110 duration-300 cursor-pointer self-center flex gap-0.5 px-4 py-2 rounded-xl">
          <div className="animate-slidein [--slidein-delay:900ms] opacity-0 text-white text-base font-medium leading-8 grow whitespace-nowrap">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
