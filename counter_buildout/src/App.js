import { useState } from 'react';
import './App.css';

function App() {
  const [count , setCount] = useState(0);
  const increment =()=>{
    setCount((prev) => prev+1);
  }
  const decrement =()=>{
    setCount((prev)=>prev-1);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
