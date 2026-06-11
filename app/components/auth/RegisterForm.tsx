"use client";
import { useState } from "react";
import { Input } from "../ui/Input";
import { FaEye, FaLock, FaMailBulk, FaUserAstronaut } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Input
        label="Full Name"
        icon={<FaUserAstronaut size={18} />}
        placeholder="John Doe"
      />

      <Input
        label="Email"
        icon={<FaMailBulk size={18} />}
        placeholder="you@example.com"
      />

      <div className="relative">
        <Input
          label="Password"
          icon={<FaLock size={18} />}
          type={showPassword ? "text" : "password"}
          placeholder="••••••"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-400"
        >
          {showPassword ? <FiEyeOff size={18} /> : <FaEye size={18} />}
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transform transition-all active:scale-[0.98] shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
      >
        Create Account
      </button>
    </form>
  );
}
