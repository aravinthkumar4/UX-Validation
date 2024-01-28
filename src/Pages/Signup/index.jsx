import React from "react";
import {Link} from 'react-router-dom'
import Input from "../../Components/FormInputs/Input";

export const Singup = () => {
  const inputObj = [
    {
      name: "email",
      label: "Email",
      placeholder: "Email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
    },
    {
      name: "confirmpassword",
      label: "Confirm password",
      placeholder: "Confirm password",
      type: "password",
    },
  ];
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs my-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form action="" className="flex flex-col gap-4">
            {inputObj?.map((item, key) => (
              <div key={key}>
                <Input {...item} />
              </div>
            ))}
            <Link to='/' className="bg-[#002D74] rounded-xl text-center text-white py-2 hover:scale-105 duration-300">
              Create an account
            </Link>
          </form>

          {/* <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <div className="cursor-pointer">Forgot your password?</div>
          </div> */}

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Already have an account?</p>
            <Link to='/' className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Login
            </Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Singup;
