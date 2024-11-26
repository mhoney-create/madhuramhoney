import { useField } from "formik";
import React from "react";

const Custominput = ({ label, ...props }) => {
  // console.log("props check", label, props);
  const [field, meta] = useField(props);
  // console.log("field and meta data:", field, meta);
  return (
    <div className="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="unique-input"
      >
        {label}
      </label>
      <input
        className={
          meta.touched && meta.error
            ? "text-sm custom-input w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            : "text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs italic mb-2 px-4 py-1 bg-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300">
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};

export default Custominput;
