import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  //connects ui to redux
  const dispatch = useDispatch();

  //brings in the state value
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' }); //same type value as type on reducer
  };
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 }); //same name as the action payload on the reducer
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
