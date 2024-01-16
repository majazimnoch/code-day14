import './App.css';
import React, { useState } from 'react';
import Visual from './components/Visual';

function App() {
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState('ticket');
  const [click, setClick] = useState(false);

  const decrementCount = () => {
    if (count > 1) {
      setCount(prevCount => {
        const newCount = prevCount - 1;
        updateTheme(newCount);
        return newCount;
      });
    }
  };

  const incrementCount = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      updateTheme(newCount);
      return newCount;
    });
  };

  const updateTheme = (newCount) => {
    setTheme(newCount === 1 ? 'ticket' : 'tickets');
  };

  const handleClick = () => {
    setClick(true);
  }

  return (
    <>
      <div className="app">
       <Visual />
        <div className='wrapper'>
          <button onClick={decrementCount}>-</button>
          <span>{count}</span>
          <span>{theme}</span>
          <button onClick={incrementCount}>+</button>
        </div>
        <button onClick={handleClick}>Get</button>
        {/* conditional rendering . If clicked is true it will render the <p> message */}
        {click && <p>You got {count} {theme}</p>}
      </div>
    </>

  );
}

export default App;
