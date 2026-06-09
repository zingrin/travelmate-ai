"use client";
import { useState } from "react";
import { Input } from "../ui/Input";
import { FaEye, FaLock, FaMailBulk, FaUserAstronaut } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { GiButtonFinger } from "react-icons/gi";

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

      <GiButtonFinger type="submit">Create Account</GiButtonFinger>
    </form>
  );
}
