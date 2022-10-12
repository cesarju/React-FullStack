import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import AppClassStates from "./AppClassStates"; Clase de estados
import AppClass3 from "./App/AppClass3";

const notes = [
  {
    id: 13,
    content: "HTML is easy",
    date: "2019-07-30",
    important: true,
  },
  {
    id: 112,
    content: "Browser can execute only JavaScript",
    date: "2020-01-7",
    important: false,
  },
  {
    id: 67,
    content: "GET and POST are the most important methods of HTTPS",
    date: "2018-11-10",
    important: false,
  },
  {
    id: 49,
    content: "I believe me",
    date: "2022-09-29",
    important: true,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppClass3 notes={notes} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
