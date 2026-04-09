import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const FormField = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  hint,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-cyan-950 tracking-wide"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-cyan-950" aria-hidden="true" />
          </div>
        )}
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value ?? ""}
          onChange={onChange}
          className={`w-full rounded-lg border border-gray-300 bg-gray-50 
            text-gray-900 placeholder-cyan-950 focus:outline-none 
            focus:ring-2 focus:ring-lime-500 focus:border-lime-500 
            transition duration-200 ease-in-out shadow-sm 
            ${Icon ? "pl-10" : "pl-3"} py-2 pr-10`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-cyan-950 focus:outline-none"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Eye className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
      {hint && (
        <p className="text-sm text-gray-600 font-bold italic leading-snug">
          {hint}
        </p>
      )}
    </div>
  );
};

export default FormField;
