import React from "react";
import ReactDOM from "react-dom";

const Content = ({ part, execises }) => {
  return (
    <div>
      <p>
        {part} {execises}
      </p>
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header nameCourse={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total value1={exercises1} value2={exercises2} value3={exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
