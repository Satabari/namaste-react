import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1 id="heading">Introduction to jsx</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// component composition
// component within a component

// React Fragment - behaves like an empty tag
const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      <h1 className="heaidng">Namaste React Fucntional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);