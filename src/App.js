import { useState } from "react";
import { SingleColor } from "./components";

import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className={`${error ? "error" : null}`}
            placeholder="#1c2042"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
};

export default App;
