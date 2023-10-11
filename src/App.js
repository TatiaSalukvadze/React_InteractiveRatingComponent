import "./App.css";
import { useState } from "react";

function App() {
  const [newp, setNew] = useState("false");
  const [score, setScore] = useState("none");

  return (
    <div className="App">
      {newp === "true" ? <ChildTwo score={score} /> : <ChildOne f={setScore} />}

      <button style={styles.sub} onClick={() => setNew("true")}>
        Submit
      </button>
    </div>
  );
}

function ChildOne({ f }) {
  const row = [];
  for (let i = 1; i < 6; i++) {
    row.push(<But inp={i} id={i} f={f} />);
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
    </div>
  );
}

function ChildTwo({ score }) {
  return (
    <p style={{ color: "white" }}>
      You selected {score}&#11088; out of 5&#11088;!!!!!!!!
    </p>
  );
}

function But({ inp, id, f }) {
  function goor() {
    f(id);
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
  sub: {
    width: "100%",
    marginTop: "30px",
    height: 50,
    borderRadius: 50,
    fontSize: "20px",
    color: "white",
    backgroundColor: "hsl(25, 97%, 53%)",
  },
};
export default App;
