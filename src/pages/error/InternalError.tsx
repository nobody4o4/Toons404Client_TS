import { Link } from "react-router-dom";

function InternalError() {
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="mb-4 text-8xl font-bold">500</h1>
        <h2 className="mb-8 text-4xl font-bold">Oops! Something went wrong.</h2>
        <p className="mb-12 text-gray-400">
          We're sorry, but an unexpected error has occurred. Please try again
          later.{" "}
          <Link to="/" className="underline">
            {" "}
            Return Home
          </Link>
        </p>
        <div className="flex items-center justify-center pt-20">
          <div className="relative h-80 w-80 animate-bounce">
            <div className="absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
            <div className="animation-delay-200 absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
            <div className="animation-delay-400 absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
            <div className="animation-delay-600 absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
            <div className="animation-delay-800 absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InternalError;

// import React from 'react';

// const ErrorPage = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-[#7ed0f2]">
//       <div className="text-center max-w-[70%] px-4 py-8 relative">
//         <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
//           <img
//             src="https://www.dropbox.com/s/xq0841cp3icnuqd/flame.png?raw=1"
//             alt="Flame"
//             className="w-32 h-32"
//           />
//         </div>
//         <div className="absolute top-52 left-1/2 transform -translate-x-1/2">
//           <img
//             src="https://www.dropbox.com/s/w7qqrcvhlx3pwnf/desktop-pc.png?raw=1"
//             alt="Desktop PC"
//             className="w-32 h-32"
//           />
//         </div>
//         <h1 className="text-8xl mb-4 text-shadow">500</h1>
//         <p className="text-3xl mb-2 text-shadow">Sorry, it's me, not you.</p>
//         <p className="text-3xl mb-2 text-shadow">&#58;&#40;</p>
//         <p className="text-3xl mt-16">
//           <a href="/" className="border-b border-dashed border-[#216f79] italic text-[#216f79] hover:text-shadow">
//             Let me try again!
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ErrorPage;
