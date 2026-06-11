"use client";
import { useState } from "react";
import { Input } from "../ui/Input";
import { CiMail } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
import { FiEyeOff } from "react-icons/fi";
import { FaEye, FaGoogle } from "react-icons/fa6";

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

      <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transform transition-all active:scale-[0.98] shadow-xl shadow-slate-200">
        Sign In
      </button>

      <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
        <div className="flex-1 border-t"></div>
        OR CONTINUE WITH
        <div className="flex-1 border-t"></div>
      </div>

      <button className="w-full flex items-center text-slate-700 justify-center gap-3 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition-all font-medium">
        <FaGoogle className="text-red-500" />
        Sign in with Google
      </button>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleDemoLogin("user")}
          className="bg-slate-50 py-2.5 rounded-xl text-xs text-slate-600 font-semibold border border-slate-100 hover:border-slate-300 transition-all"
        >
          Login as User
        </button>
        <button
          onClick={() => handleDemoLogin("admin")}
          className="bg-slate-50 py-2.5 rounded-xl text-xs text-slate-600 font-semibold border border-slate-100 hover:border-slate-300 transition-all"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}
