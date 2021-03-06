import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as actions from '../../actions'

import './counter.css'

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

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, actions)(Counter);