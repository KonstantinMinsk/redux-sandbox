import React from "react";
import { connect } from "react-redux";
import "./counter.css";
import { inc, dec, rInc, rDec } from '../../actions';

const Counter = ({ counter, inc, dec, rInc, rDec }) => {
    return (
        <div className="d-flex d-flex-row jumbotron">
            <button id="r-dec" className="btn btn-primary" onClick={rDec}>
                random DEC
            </button>
            <button id="dec" className="btn btn-primary btn-lg" onClick={dec}>
                DEC
            </button>
            <h2 className="counter"> {counter} </h2>
            <button id="inc" className="btn btn-primary btn-lg" onClick={inc}>
                INC
            </button>
            <button id="r-inc" className="btn btn-primary" onClick={rInc}>
                random INC
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rInc: () => {
            const value = Math.floor(Math.random()*10+1);
            dispatch(rInc(value));
        },
        rDec: () =>  {
            const value = Math.floor(Math.random()*10+1);
            dispatch(rDec(value));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);