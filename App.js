import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "header" },
  "React app Heading"
);

const rootHeader = ReactDOM.createRoot(document.getElementById("root"));

rootHeader.render(heading);
