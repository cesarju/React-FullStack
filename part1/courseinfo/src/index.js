import React from "react";
import ReactDOM from "react-dom";

const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Part part={part1} execises={exercises1} />
      <Part part={part2} execises={exercises2} />
      <Part part={part3} execises={exercises3} />
    </div>
  );
};
const Header = ({ nameCourse }) => {
  return (
    <div>
      <h1>{nameCourse}</h1>
    </div>
  );
};

const Total = ({ value1, value2, value3 }) => {
  return <p>Number of exercises {value1 + value2 + value3}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <Header nameCourse={course} />
      <Content />
      <Total value1={exercises1} value2={exercises2} value3={exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
