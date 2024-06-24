"use client";

const Error = ({ error, reset }) => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-2xl font-semibold pt-2">Something went wrong!</p>
      <br />
      <button
        onClick={reset}
        className="px-8 bg-blue-500 border-2 rounded-lg shadow-lg"
      >
        Refresh
      </button>
      <pre>{error.message}</pre>
    </div>
  );
};

export default Error;
