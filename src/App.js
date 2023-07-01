import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function incrementCount() {
    setCount(count + step);
  }

  function decrementCount() {
    setCount(count - step);
  }

  return (
    <>
      {/* step */}
      <div className="">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      {/* count */}
      <div className="">
        <button onClick={decrementCount}>-</button>
        Count: {count}
        <button onClick={incrementCount}>+</button>
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
    </>
  );
}
