"use client"

import { X } from "lucide-react";


type ErrorProps = {
  error?: {
    message?: string;
  };
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  // console.log(error.error.message);
  return (
    <div id='productsContent' className="flex h-screen flex-col items-center justify-center gap-2 p-24">
        <div className="flex flex-col items-center justify-center">
          <X className="text-red-700" />
          <h1 className="text-red-700 text-lg">ERROR!</h1>
        </div>
        <h2 className="text-center">{error?.message || "There has been a glitch in the process. Could not fetch products!"}</h2>
        <button onClick={() => window.location.reload()} className="mt-4 block border bg-transparent shadow-md hover:shadow-lg border-red-700 rounded-md text-red-700 py-[11px] px-[27px] hover:cursor-pointer">
          Try again
        </button>
    </div>
  )
}

export default Error;