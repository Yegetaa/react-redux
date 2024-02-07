import { useSelector, useDispatch } from "react-redux"

import { selectCount, increment, decrement, reset} from "./counterSlice"

import { useState } from "react"

function Counter() {
    //Global state; reading the count from the store
    const count = useSelector(selectCount);
    //local state
    const [incrementAmount, setIncrementAmount] = useState(1);

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter: {count} </h2>

            <button 
            onClick={()=>dispatch(increment(incrementAmount))}>+</button>


            <input 
            type="number" 
            min="1" 
            step="1" 
            onChange={(e) => setIncrementAmount(Number(e.target.value))}/>


            <button 
            onClick={()=>dispatch(decrement(incrementAmount))}>-</button>

            <br/>

            <button onClick={()=>{
                setIncrementAmount(1);
                dispatch(reset());
            }}>Reset</button>


        </div>
    )
};

export default Counter;