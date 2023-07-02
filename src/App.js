import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  function resetValues() {
    setStep(1);
    setCount(0);
  }

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      {/* step */}
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label>Step: {step}</label>
      </div>

      {/* count */}
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          id="count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      {/* output */}
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>

      {/* Reset button */}
      <div>
        {(count !== 0 || step !== 1) && (
          <button onClick={resetValues}>Reset</button>
        )}
      </div>
    </>
  );
}
