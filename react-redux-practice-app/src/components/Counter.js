import { useDispatch, useSelector } from "react-redux";
import { counteractions } from "../store/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counteractions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counteractions.increment());
  };

  const decrementHandler = () => {
    dispatch(counteractions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counteractions.increase(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by Five</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
