import React from "react";
import ReactDOM from "react-dom/client";

// this code is equivalent to below written jsxHeading.
// const heading = React.createElement(
//   "h1",
//   { id: "header" },
//   "React app Heading"
// );

// JSX - it gets transpiled before it reaches to js. it is done by parcel.

// React element
const jsxHeading = (
  <div>
    <h1>This is rendered using JSX</h1>
    <h2>checking multi line in jsx</h2>
  </div>
);
// Title component

const Title = () => <h1>This is the title component.</h1>;
// React component
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1 className="heading">This is heading component</h1>
    </div>
  );
};

const rootHeader = ReactDOM.createRoot(document.getElementById("root"));

rootHeader.render(<HeadingComponent />); // it's a way to render a component.
