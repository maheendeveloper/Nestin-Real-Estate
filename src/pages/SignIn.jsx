import React, { useState } from "react";
import logo from '../assets/logo-design.png'
import form from '../assets/form.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";


const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">

      <div className="flex flex-col justify-center w-full md:w-[50%] lg:w-[35%] px-6 sm:px-10 py-8 lg:py-4">
        

        <div className="flex justify-center mb-6">
          <div className="text-4xl">
            <img className="w-28" src={logo}/>
          </div>
        </div>

        <h2 className="text-2xl lg:text-xl font-bold mb-6 text-center">
          {isSignUp ? "Create Account" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 lg:py-1.5 lg:text-sm rounded"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 lg:py-1.5 lg:text-sm rounded"
          />

          {!isSignUp && (
            <label className="text-sm flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              Keep me logged in
            </label>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 lg:py-1.5 lg:text-sm rounded hover:bg-blue-700"
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-sm lg:text-xs text-center">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignUp(false)}
                className="text-blue-600 hover:underline"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              New to Nestin?{" "}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-blue-600 hover:underline"
              >
                Create account
              </button>
            </>
          )}
        </p>

        {isSignUp && (
          <>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="space-y-3 text-sm lg:text-xs">
              <button className="w-full border py-2 lg:py-1.5 rounded flex items-center justify-center gap-3 hover:bg-gray-50">
                <FcGoogle className="text-lg" />
                Continue with Google
              </button>
              <button className="w-full border py-2 lg:py-1.5 rounded flex items-center justify-center gap-3 hover:bg-gray-50">
                <FaApple className="text-lg" />
                Continue with Apple
              </button>
              <button className="w-full border py-2 lg:py-1.5 rounded flex items-center justify-center gap-3 hover:bg-gray-50">
                <FaFacebook className="text-blue-600 text-lg" />
                Continue with Facebook
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting, I accept Nestin’s{" "}
              <span className="text-blue-600 underline cursor-pointer">
                terms of use
              </span>
            </p>
          </>
        )}
      </div>

     
      <div className="hidden md:block md:w-[50%] lg:w-[65%] bg-gray-100">
        <img
          src={form}
          alt="Home"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
