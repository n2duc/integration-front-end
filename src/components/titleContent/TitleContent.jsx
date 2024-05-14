import React from "react";

const TitleContent = ({ mainChildren, minorCirldren }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{mainChildren}</h1>
      <h2 className="font-semibold">{minorCirldren}</h2>
    </div>
  );
};

export default TitleContent;
