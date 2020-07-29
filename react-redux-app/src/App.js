import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import Increment from './actions/increment'
import Decrement from './actions/decrement'

function App() 
{
  const counter= useSelector(state =>state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
  <h5>React Redux App </h5>
      </header>
  <h5>Counter {counter}</h5>
      <button onClick={()=> dispatch(Increment())}>+</button>
      <button onClick={()=> dispatch(Decrement())}>-</button>
    </div>
  );
}

export default App;
