"use client";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";

const Button = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsTrue(true);
    setTimeout(() => {
      setIsSuccess(true);
    }, 2700);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`py-5 px-5 w-[300px] h-[80px] text-lg flex items-center justify-center border-2 rounded-full text-gray-600 border-gray-600 font-bold hover:shadow-xl hover:-translate-y-1 transition-all gap-3 relative ${isSuccess && 'border-green-500 shadow-green-500'}`}
    >
      <>
        <IoCartOutline
          className={`text-3xl transition-all duration-500 ${
            isTrue ? "scale-0" : ""
          }`}
        />
        <p className={`transition-all duration-500 ${isTrue ? "scale-0" : ""}`}>
          Add to Cart
        </p>
      </>
      <>
        <BsFillCartFill
          className={`text-3xl absolute -start-10 transition-all ease-out duration-500 opacity-0 ${
            !isTrue ? "" : "start-1/2 -translate-x-1/2 opacity-100"
          } ${isSuccess ? "scale-0 opacity-0" : ""}`}
        />
        <div className={`absolute flex items-center justify-center gap-2 ${isSuccess && 'text-green-500'}`}>
          <BsFillCartCheckFill
            className={`text-3xl transition-all ease-out duration-500"
           ${!isSuccess ? "scale-0" : ""}`}
          />
          <p
            className={`transition-all duration-700 w-0 opacity-0 ${
              isSuccess ? "w-[160px] opacity-100 text-nowrap" : ""
            }`}
          >
            Add Successfully
          </p>
        </div>
        <IoShirtOutline
          className={`text-4xl absolute  transition-all ease-out duration-500 scale-0 ${
            !isTrue ? "" : "button"
          }`}
        />
      </>
    </button>
  );
};

export default Button;


// Styles needed

// .button {
//   animation: button 2s ease-out backwards;
//   animation-delay: 700ms;
// }

// @keyframes button {
//   0% {
//     bottom: 0;
//     transform: scale(0);
//   }
//   25% {
//     bottom: 120px;
//     transform: scale(1);
//   }
//   50% {
//     bottom: 120px;
//     transform: scale(1);
//   }
//   65% {
//     bottom: 120px;
//     transform: scale(1);
//   }
//   85% {
//     bottom: 120px;
//     transform: scale(1);
//   }
//   100% {
//     bottom: 0;
//     transform: scale(0);
//   }
// }
