import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export const Input = ({ label, icon, ...props }: InputProps) => (
  <div className="w-full">
    <label className="block text-sm font-semibold mb-1 text-gray-700">
      {label}
    </label>
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600 ${icon ? "pl-10" : "px-4"} border-gray-300`}
        {...props}
      />
    </div>
  </div>
);
