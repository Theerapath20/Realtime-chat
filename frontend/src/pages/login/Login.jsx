import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-300 mx-3 ">ChatAPP</span>
        </h1>
        <form>
          <div>
            <label className=" label p-2">
              <span className="text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username "
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-white label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-gray-300 mt-2 inline-block text-white"
          >
            {"Don't"} have an account
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-rose-600 text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// STARTER CODE FOR THIS FILE

// function Login() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-300 ">ChatAPP</span>
//         </h1>
//         <form>
//           <div>
//             <label className=" label p-2">
//               <span className="text-white label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username "
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-white label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-gray-300 mt-2 inline-block text-white"
//           >
//             {"Don't"} have an account
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 bg-rose-600 text-white">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
