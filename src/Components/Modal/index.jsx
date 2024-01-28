import React, { useState } from "react";
import Input from "../FormInputs/Input";

function Modal({ children, title, size = "xl" }) {
  const sizecss = {
    sm: "max-w-sm",
    md: "max-w-md",
    xl: "max-w-5xl",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button className="font-medium text-indigo-400 hover:text-indigo-600" onClick={openModal}>Review</button>
      {isModalOpen && (
        <>
          <div className="backdrop-blur-md justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
            <div className={`relative w-full ${sizecss[size]} mx-4`}>
              <div className="p-4 border-0 rounded-md shadow-lg relative flex flex-col w-full min-h-[30vh] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between">
                  <h4 className="text-valuecolor1 font-semibold">
                    {title}
                  </h4>
                  <button
                    className="ml-auto rounded-md float-right leading-none font-semibold outline-none focus:outline-none hover:scale-110"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative flex-auto py-4 lg:mt-6">
                  <div className="grid lg:grid-cols-2 gap-2">
                    <Input name='Rank' placeholder='Rank' label='Rank' />
                    <Input name='Feedback' placeholder='Feedback' label='Feedback' />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-8 rounded-b">
                  <button className="bg-indigo-400 px-4 py-2 rounded-md text-white" onClick={closeModal}>Cancel</button>
                  <button className="bg-indigo-400 px-4 py-2 rounded-md text-white" onClick={closeModal}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

export default Modal;
