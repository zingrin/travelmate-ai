"use client";
import { useState } from "react";
import { Input } from "../ui/Input";
import { CiMail } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleDemoLogin = (role: "user" | "admin") => {
    setFormData({
      email: role === "user" ? "user@example.com" : "admin@example.com",
      password: "123456",
    });
  };

  return (
    <div className="space-y-4">
      <Input
        label="Email"
        icon={<CiMail size={18} />}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="you@example.com"
      />

      <div className="relative">
        <Input
          label="Password"
          icon={<BiLock size={18} />}
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="••••••"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-500"
        >
          {showPassword ? <FiEyeOff size={18} /> : <FaEye size={18} />}
        </button>
      </div>

      <button className="w-full bg-[#0f172a] text-white py-2 rounded-lg font-semibold hover:bg-slate-800 transition">
        Sign In
      </button>

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <div className="flex-1 border-t"></div>
        OR CONTINUE WITH
        <div className="flex-1 border-t"></div>
      </div>

      <button className="w-full flex items-center text-gray-500 justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
        {/* Google Icon here */}
        Sign in with Google
      </button>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleDemoLogin("user")}
          className="bg-gray-50 py-2 rounded-lg text-sm text-gray-500 font-medium hover:bg-gray-200 transition"
        >
          Login as User
        </button>
        <button
          onClick={() => handleDemoLogin("admin")}
          className="bg-gray-50 py-2 rounded-lg text-sm  text-gray-500 font-medium hover:bg-gray-200 transition"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}
