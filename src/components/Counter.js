import React, { useState } from "react";
import "./CounterCss.css";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState("ticket");
  const [click, setClick] = useState(false);

  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        updateTheme(newCount);
        return newCount;
      });
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      updateTheme(newCount);
      return newCount;
    });
  };

  const updateTheme = (newCount) => {
    setTheme(newCount === 1 ? "ticket" : "tickets");
  };

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div className="counter-component-wrapper">
      <h1>Book a ticket to Gran Canaria</h1>
      <div className="counter-wrapper">
        <div className="counting-part">
          <button onClick={decrementCount}>-</button>
          <span>{count}</span>
          <span>{theme}</span>
          <button onClick={incrementCount}>+</button>
        </div>
        <button onClick={handleClick}>Get</button>
        {/* conditional rendering . If clicked is true it will render the <p> message */}
        {click && (
          <p>
            You got {count} {theme}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Counter;
