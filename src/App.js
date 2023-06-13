import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['sakib', 'kuber','bapparaz', 'salman shah', 'mannna', 'rubel'];
  const singers = [
    {name: 'dr.Razzak', job: 'singer' },
    {name: 'Eva Rahman', job: 'housewife' },
    {name: 'Siddik', job: 'actor' },
    {name: 'hero alom', job: 'allrounder' },
    {name: 'kelvin', job: 'worker' },
  ]

  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return(
    <div>
        <h2>{count}</h2>
        <button onClick={increaseCount}>Increase</button> 
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}




export default App;
