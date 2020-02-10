import React from "react";
import { connect } from "react-redux";

export function DisplayCounter({ count }) {
    return (<p>Contador Atual:  {count}</p>)
}

function mapStateToProps(state) {
    return { count: state.count }
}
export default connect(mapStateToProps)(DisplayCounter)