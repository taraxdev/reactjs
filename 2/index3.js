//never update state from the variable directly

import React, { useState } from 'react';
import './App.css';

const App = () =>{
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Counter using State:</h1>
      <h2>Counter value is {count}</h2>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>count>10 ? "" : setCount(count+1)}>Increment</button>
      <button onClick={()=>count<=0 ? "" : setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default App;