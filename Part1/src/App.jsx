const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = () => {
    return (
      <>
        <h2>{course}</h2>
      </>
    );
  };
  const Part = (props) => {
    return (
      <>
        <p>
          {props.parte} {props.ejercicio}
        </p>
      </>
    );
  };
  const Content = () => {
    return (
      <>
        <Part parte={part1} ejercicio={exercises1} />
        <Part parte={part2} ejercicio={exercises2} />
        <Part parte={part3} ejercicio={exercises3} />
      </>
    );
  };

  const Total = () => {
    return (
      <>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </>
    );
  };
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
