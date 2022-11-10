import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  //connects ui to redux
  const dispatch = useDispatch();

  //brings in the state value
  const counter = useSelector(state => state.counter.counter);  //useSelector can be used multiple times to retrieve different pieces of data from state

  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment()); //execute the method ()!!
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));  //automatically created action objects which are { type: SOME_IDENTIFIER, payload: 10 }
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
