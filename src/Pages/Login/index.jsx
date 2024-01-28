import React from "react";
import {Link} from 'react-router-dom'
import Input from "../../Components/FormInputs/Input";

export const Login = () => {
  const inputObj=[
    {
      name:'email',
      label:'Email',
      placeholder:'Email',
      type:'email'
    },
    {
      name:'password',
      label:'Password',
      placeholder:'Password',
      type:'password'
    },
  ]
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-indigo-400">Login</h2>
          <p className="text-xs my-4 text-[#002D74]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>

          <form action="" className="flex flex-col gap-4">
        {inputObj?.map((item,key)=>(
          <div key={key}>
          <Input {...item}/>
          </div>
        ))}
            <Link to='home' className="bg-indigo-400 rounded-xl text-center text-white py-2 hover:scale-105 duration-300">
              Login
            </Link>
          </form>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <div className="cursor-pointer">Forgot your password?</div>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <Link to='signup' className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Register
            </Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
           <img
            className="rounded-2xl"
            src="/assets/login.png"
            alt=""
            loading="lazy"
          /> 
        </div>
      </div>
    </section>
  );
};

export default Login;
