import "./App.css";
import { useState } from "react";
import im from "./illustration-thank-you.svg";

function App() {
  const [newp, setNew] = useState("false");
  const [score, setScore] = useState("0");

  return (
    <div className="App">
      {newp === "true" ? (
        <ChildTwo score={score} />
      ) : (
        <ChildOne setScore={setScore} setNew={setNew} />
      )}
    </div>
  );
}

function ChildOne({ setScore, setNew }) {
  const row = [];
  for (let i = 1; i < 6; i++) {
    row.push(<But inp={i} id={i} setScore={setScore} />);
  }
  return (
    <div>
      <button className="but">&#11088;</button>
      <div style={{ paddingBottom: "70px" }}>
        <h1 style={{ color: "white" }}>How Did we do?</h1>
        <p style={{ color: "gray" }}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div style={styles.flex}> {row}</div>
      <button className="submit" onClick={() => setNew("true")}>
        Submit
      </button>
    </div>
  );
}

function ChildTwo({ score }) {
  return (
    <div className="selected">
      <img src={im} alt="img" />

      <div className="rating">You selected {score} out of 5</div>
      <div className="ratetext">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

function But({ inp, id, setScore }) {
  function goor() {
    setScore(id);
    const elem = document.getElementById(id);
    elem.style.backgroundColor = "orange";
    for (let i = 1; i < 6; i++) {
      if (i !== id) {
        const elem = document.getElementById(i);
        elem.disabled = true;
      }
    }
  }
  return (
    <button id={id} className="but need" onClick={goor}>
      {inp}
    </button>
  );
  //
}

const styles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
};
export default App;
