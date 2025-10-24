import React from "react";
import { PropagateLoader } from "react-spinners";

const PageLoader = ({ color = "#43b100" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <PropagateLoader color={color} />
      </div>
    </div>
  );
};

export default PageLoader;
