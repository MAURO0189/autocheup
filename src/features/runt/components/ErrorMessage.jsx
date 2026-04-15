import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div
      className="flex items-center gap-3 bg-red-50 border border-red-200
      text-red-700 text-sm px-4 py-3 rounded-lg"
    >
      <AlertCircle className="w-4 h-4 shrink-0" />
      {message}
    </div>
  );
};

export default ErrorMessage;
