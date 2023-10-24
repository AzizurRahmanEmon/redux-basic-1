import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }
  return (
    <section className="counter-section">
      <p className="counter-count">{count}</p>
      <div className="upper-action">
        <button className="action-btn" onClick={() => dispatch(increment())}>+</button>
        <button className="action-btn" onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input className="count-input" type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
      <div className="lower-action">
        <button className="action-btn" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button className="action-btn" onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
