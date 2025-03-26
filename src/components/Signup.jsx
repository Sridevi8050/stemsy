
import React from "react";
import { Link } from "react-router-dom";
import Login1 from "../assets/login1.png"
import Login2 from "../assets/login2.png"
import Login3 from "../assets/login3.png"
import Login4 from "../assets/login4.png"


function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <img src={Login1} alt="" className="h-15 w-15 relative left-150 top-70"></img>
          <img src={Login2} alt="" className="h-15 w-15 relative right-20 top-70"></img>
          <img src={Login3} alt="" className="h-15 w-15 relative left-200 top-20"></img>
          <img src={Login4} alt="" className="h-15 w-15 relative right-120"></img>
      <div className="w-full max-w-sm sm:max-w-md relative right-30 bg-white p-6 sm:p-8 shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <form action="/submit" method="POST">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Public username"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country/Region"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center mb-4">
            <input type="checkbox" name="agreed" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I agree to terms & conditions
            </label>
          </div>

          {/* Sign-up Button */}
          <Link to="/login">
            <button
              type="button"
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
            >
              Sign up →
            </button>
          </Link>
        </form>

        {/* Alternative Sign-up */}
        <div className="mt-4 text-center text-gray-600 text-sm">Or Sign Up with</div>
        <div className="mt-2 flex justify-center">
          <button className="bg-gray-200 px-4 py-2 rounded-md flex items-center hover:bg-gray-300 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
        </div>

        {/* Already have an account? */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
