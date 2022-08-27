import React, { useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByValue, reset } from './counterSlice';

const Counter = () => {
    const countState = useSelector((state)=>state.counter.count)
    const element = useRef()
    const dispatch = useDispatch()
    const byValue=()=>{
        const value = parseFloat(element.current.value) | 0
        dispatch(incrementByValue(value))
    }
    return (
        <div>
            <h1>{countState}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <input type="number" ref={element} />
            <button onClick={byValue}>Increment by Value</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;