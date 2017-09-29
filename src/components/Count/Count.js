import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CountActions from '../../redux/actions/count';

import './Count.css';

function mapStateToProps(state) {
    return {
        counter: state.count.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        CountActions: bindActionCreators(CountActions, dispatch)
    };
}

class Count extends Component {

    handleOnIncrement = (e) => {
        e.preventDefault();
        this.props.CountActions.increment();
    };

    handleOnDecrement = (e) => {
        e.preventDefault();
        this.props.CountActions.decrement();
    };

    render() {
        return (
            <div>
                <button onClick={this.handleOnIncrement}>plus</button>
                <span>{this.props.counter}</span>
                <button onClick={this.handleOnDecrement}>minus</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
