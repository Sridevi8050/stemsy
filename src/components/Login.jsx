// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const navigate = useNavigate(); // For navigation

// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Dummy authentication check
// //     if (formData.email === "admin@gmail.com" && formData.password === "password") {
// //       alert("Login successful!");
// //       navigate("/Home"); // Redirect to Dashboard
// //     } else {
// //       alert("Invalid email or password!");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg border border-gray-300">
// //         <h2 className="text-2xl font-semibold text-center mb-6">Let's get started!</h2>

// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="UserId/Email"
// //             className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             onChange={handleChange}
// //             required
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             onChange={handleChange}
// //             required
// //           />

// //           <a href="#" className="text-blue-400 block text-right mb-4">Forgot password?</a>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-gray-800"
// //           >
// //             Sign in →
// //           </button>
// //         </form>

// //         <div className="mt-4 text-center text-gray-600 text-sm">Or Sign In with</div>

// //         <div className="mt-2 flex justify-center">
// //           <button className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
// //             <img
// //               src="https://www.svgrepo.com/show/355037/google.svg"
// //               alt="Google"
// //               className="w-5 h-5 mr-2"
// //             />
// //             Google
// //           </button>
// //         </div>

// //         <div className="mt-4 text-center text-sm text-gray-600">
// //           Don't have an account?{" "}
// //           <a onClick={() => navigate("/signup")} className="text-blue-500 hover:underline cursor-pointer">
// //             Sign Up
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


// import React from "react";
// import { Link } from "react-router-dom";


// function Login (){

//     return(
   
//      <div className="flex items-center justify-center min-h-screen bg-gray-100">
  
//       <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg border border-gray-300">
//         <h2 className="text-2xl font-semibold text-center mb-6">Let's get started!</h2>

//         <form >
         
//           <input
//             type="email"
//             name="email"
//             placeholder="UserId/Email"
//             className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
         
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full px-4 py-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        
//             required
//           />
         
//           <a href="" className="text-blue-400 pl-60 pb-36">forgot password?</a>
         
          
//           <Link to="/home">  <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-gray-800"
//           >
//             Sign in →
//           </button>
//           </Link> 
//         </form>

//         <div className="mt-4 text-center text-gray-600 text-sm">Or Sign In with</div>

//         <div className="mt-2 flex justify-center">
//           <button className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               alt="Google"
//               className="w-5 h-5 mr-2"
//             />
//             Google
//           </button>
//         </div>

//         <div className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account? 
          
//         <a href="" className="text-blue-500 hover:underline">Sign Up</a>
//         </div>
//       </div>
//     </div>
//   );
// };
    
// export default Login

import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-6">Let's get started!</h2>

        <form>
          <input
            type="email"
            name="email"
            placeholder="UserId/Email"
            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Forgot password link */}
          <div className="text-right mb-4">
            <a href="#" className="text-blue-400 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign-in button */}
          <Link to="/home">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
            >
              Sign in →
            </button>
          </Link>
        </form>

        {/* Alternative sign-in */}
        <div className="mt-4 text-center text-gray-600 text-sm">Or Sign In with</div>
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

        {/* Sign-up link */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
