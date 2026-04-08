"use client";

import React from "react";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer">
        <FaPlaneDeparture className="text-blue-700 text-3xl" />
        <h1 className="text-2xl font-bold flex items-center">
          <span className="text-slate-800">Travel</span>
          <span className="text-blue-700">Mate</span>
          <span className="text-orange-500 ml-1">AI</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
