import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/couterSlice'
import './App.css';
import { useState } from 'react';


function App() {
  const [incrementAmount, setIncrementAmount] = useState(7);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}></input>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>追加
      </button>
    </div >
  );
}

export default App;
