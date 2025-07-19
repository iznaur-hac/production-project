import { useState } from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => ++prev)
    }
    const decrement = () => {
        setCount(prev => --prev)
    }
  return (
    <div>
      <button className={classes.btn} onClick={() => increment()}>+</button>
      <p className={classes.num}>{count}</p>
      <button className={classes.btn} onClick={() => decrement()}>-</button>
    </div>
  )
}
