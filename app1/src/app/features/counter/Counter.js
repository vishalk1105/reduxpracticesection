import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  const addValue = Number(incrementAmount) || 0;
  const onIncrementAmount = () => {
    dispatch(incrementByAmount(addValue));
  };
  return (
    <div>
      <h2>{count}</h2>
      <input
        type={"text"}
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      ></input>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={resetAll}>Reset</button>
      <button onClick={onIncrementAmount}>Increment By Amount</button>
    </div>
  );
};

export default Counter;
