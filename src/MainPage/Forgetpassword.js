import React, { useState } from "react";
import validator from "validator";
import { Navigate, useNavigate } from "react-router-dom";
import FooterBar from "./Footer";
// var passw
var needToCheck = false;
var needToCheckpas = false;

const Forgetpassword = () => {
  var [email, setEmail] = useState(" ");
  var [passw, setPassw] = useState(" ");
  var [userData, setuserData] = useState("{}");
  var [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const submitThis = async (e) => {
    e.preventDefault();

    if (needToCheck) {
      //need to add firebase authicator
      const info = { username: email, Password: passw };
      // //console.log(info);
      let valid_data = await validateUser(info);
      //console.log(userData);
    }
  };
  const emailvalidate = (value) => {
    // setEmail(value);
    if (validator.isEmail(value)) {
      setEmail(value);
      // //console.log(`email is ${value}`);
      needToCheck = true;
      //console.log(`email is ${value}   ${needToCheck}`);
    } else {
      needToCheck = false;
      //console.log(`bad email`);
    }
  };
  const passvalidate = (value) => {
    setPassw(value);
  };
  async function validateUser(info) {
    fetch("http://localhost:8080/forget_gauth/", {
      method: "POST",
      body: JSON.stringify(info),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        setuserData(json);
        setloading(false);
        //   .then(json => setpostDataApi(json.postDataApi))
        // //console.log(json);
        if (json["authStatus"] === "success") {
          //console.log(userData);
          navigate("/");
          alert("Password Reset Email has sent to your email id");
          return true;
        }
      });
  }

  return (
    <>
      {/*
          This Forgetpasswordpage requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <html class="dark">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-slate-800">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-15 w-auto"
              src="https://img.icons8.com/dusk/64/snowman.png"
              alt="Aravindh Eswhar Ceramics"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white">
              Reset password of your account
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
                  className="block text-sm font-medium leading-7 dark:text-white"
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
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              ></a>
            </p>
          </div>
        </div>
      </html>
      <FooterBar />
    </>
  );
};
export default Forgetpassword;
