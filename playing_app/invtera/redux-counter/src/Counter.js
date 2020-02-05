import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";


export function Counter({ count, increment, decrement }) {
    return (
        <p>
            <span className='Counter'>Contador: {count} </span>
            <button className='increment' onClick={() => increment(10)}>+</button>
            <button className='decrement' onClick={() => decrement(20)}>-</button>
        </p>
    )

}

function mapStateToProps(state){
    return{
        count: state.count 
    }
}

function mapDispatchToProps(dispatch){
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)