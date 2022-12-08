import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/ComingFromCSS";
import ExtendingStyles from "./components/ExtendingStyles";
import PassedProps from "./components/PassedProps";
import StylingAnyComponent from "./components/StylingAnyComponent";
import "./index.css";
// import GetingStart from "./components/GetingStart";
import reportWebVitals from "./reportWebVitals";
// import AdaptingBasedOnProps from "./components/AdaptingBasedOnProps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <GetingStart /> */}
    {/* <AdaptingBasedOnProps /> */}
    {/* <ExtendingStyles /> */}
    {/* <StylingAnyComponent /> */}
    {/* <PassedProps /> */}
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
