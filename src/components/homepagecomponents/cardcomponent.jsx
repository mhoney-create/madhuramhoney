import React from "react";

const Cardcomponent = ({ title, description, image }) => {
  return (
    <div className="flex flex-col w-50 h-60 border-4 border-honey-normal border-dashed items-center gap-4 text-center rounded ">
      <div className="w-20 text-3sxl font-extrabold mb-2">
        <img src={image} />
      </div>
      <div>{title}</div>
      <div className="w-52 text-gray-600 mb-4">{description}</div>
    </div>
  );
};

export default Cardcomponent;
