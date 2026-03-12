import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter Application</h1>

      <h2>Counter: {count}</h2>

      <button onClick={increment} style={{ margin: "10px", padding: "10px" }}>
        Increment
      </button>

      <button onClick={decrement} style={{ margin: "10px", padding: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default App;