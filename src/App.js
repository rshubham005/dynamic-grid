import "./App.css";
import { useState } from "react";
import Tiles from "./tilles/Tiles";

function App() {
  const [n, set_n] = useState(0);
  const [input_value, set_input_value] = useState(0);
  const handleSubmit = () => {
    if (input_value > 10 || input_value < 0) {
      alert("Please enter value between 0 and 10");
    } else {
      set_n(input_value);
    }
  };
  return (
    <div className="App">
      {n > 0 ? (
        <Tiles count={n} />
      ) : (
        <div className="main">
          <h2>Please enter number of particepants</h2>
          <div className="input_box">
            <input
              type="number"
              name="input_n"
              className="input_field"
              value={input_value}
              onChange={(e) => {
                set_input_value(e.target.value);
              }}
            />
            <button className="button" onClick={() => handleSubmit()}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
