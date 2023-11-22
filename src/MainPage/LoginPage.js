import React, { useState } from "react";
import validator from "validator";
import { Navigate } from "react-router-dom";

// var passw
var needToCheck = false;
var needToCheckpas = false;

const Login = () => {
  var [email, setEmail] = useState(" ");
  var [passw, setPassw] = useState(" ");
  const submitThis = (e) => {
    e.preventDefault();

    if (needToCheck && needToCheckpas) {
      //need to add firebase authicator
      const info = { email: email, passw: passw };
      let validateResult = true;
      document.cookie = `validate_email=${email}`;

      if (validateResult === true) {
        localStorage.setItem("authenticated", true);
      }
    } else {
      localStorage.setItem("authenticated", false);
      console.log("thapacreds");
    }
  };
  const emailvalidate = (value) => {
    // setEmail(value);
    if (validator.isEmail(value)) {
      setEmail(value);
      // console.log(`email is ${value}`);
      needToCheck = true;
      console.log(`email is ${value}   ${needToCheck}`);
    } else {
      needToCheck = false;
      console.log(`bad email`);
    }
  };
  const passvalidate = (value) => {
    // setPassw(value);
    if (validator.isStrongPassword(value)) {
      setPassw(value);
      needToCheckpas = true;
      console.log(`password is ${value}  ${needToCheckpas}`);
    } else {
      needToCheckpas = false;
      console.log(`bad pass ${passw}`);
    }
  };

  return (
    <>
      {/*
          This Loginpage requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://img.icons8.com/emoji/47/rosette.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={(e) => submitThis(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => emailvalidate(e.target.value)}
                  required={true}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => passvalidate(e.target.value)}
                  required={true}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
