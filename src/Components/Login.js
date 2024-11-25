import React from "react";
import { SiClerk } from "react-icons/si";


const Login = () => {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      
        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative ">
          <div
            className="absolute -left-20 top-24 -z-10 border bg-indigo-600  border-gray-300 rounded-md px-4 py-2 shadow-md text-xs font-medium text-white"
            style={{ transform: "rotate(-90deg)"}}
          >
            <div className="flex gap-1">
              <span className="mr-1">Secured by </span>
              <span><SiClerk /> </span>
              <span>Clerk</span>

            </div>
          </div>
          <div className="shadow-2xl rounded-3xl p-6  ">
            <img
              alt="MindPal"
              src="https://media.licdn.com/dms/image/v2/D560BAQEci3-sC4bZ9w/company-logo_200_200/company-logo_200_200/0/1691675047559/mindpal_space_logo?e=2147483647&v=beta&t=0HqMimAfmwqksGDFBChvQ8wpbyQebJOoK3iwZKiiavY"
              className="h-10 w-auto"
            />
            <h2 className="mt-6 text-left text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in
            </h2>
            <p className="text-left text-gray-500 font-semibold">to continue to MindPal</p>

            <div className="mt-6">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
                alt="Google logo"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
          </div>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>

            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900 mt-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  CONTINUE
                </button>
              </div>
            </form>

            <p className="mt-6 text-left text-sm/6 text-gray-500">
              No account?{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Login;