import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import HighOrderComponent from '../highOrderComponent/HighOrderComponent';
import Clock from '../../components/clock/Clock';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppActions from '../../redux/actions/app';

import './App.css';

function mapStateToProps(state) {
    return {
        app: state.app.appLoaded,
        clicks: state.app.updateApp
    };
}

function mapDispatchToProps(dispatch) {
    return {
        AppActions: bindActionCreators(AppActions, dispatch)
    };
}

class App extends Component {
    static propTypes = {
        welcomeMsg: PropTypes.string.isRequired
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        console.log('props', props);

        this.state = {
            isMounted: false,
            //clicks: 0,
            inputMsg: 'will update when you type something!'
        }
    }

    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
        this.setState({
            isMounted: true
        })
    }

    componentWillMount() {
        console.log('COMPONENT WILL MOUNT');
    }

    componentWillUnmount() {
        console.log('COMPONENT WILL UNMOUNT');
    }

    componentWillReceiveProps(nextProps) {
        console.log('COMPONENT WILL RECEIVE PROPS', nextProps);
        return nextProps;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('SHOULD COMPONENT UPDATE', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('COMPONENT WILL UPDATE', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('COMPONENT DID UPDATE', prevProps, prevState);
    }

    onClickHandler = (e) => {
        e.preventDefault();
        // this.setState({
        //     clicks: this.state.clicks + 1
        // })

        this.props.AppActions.updateApp(1);
    };

    onChangeHandler = (e) => {
        e.preventDefault();
        console.log('input target', e.target.value);
        this.setState({
            inputMsg: e.target.value
        })
    };

	render() {
	    const {inputMsg} = this.state;
	    const {clicks} = this.props;

		return (
			<div className="App">
                <Header msg={this.props.welcomeMsg}/>
                <Clock/>
                <HighOrderComponent>
                    <div className="App-clicks">
                        <button className="App-button" onClick={this.onClickHandler}>Click</button>
                        <span>{clicks}</span>
                        <input className="App-input" onChange={this.onChangeHandler} />
                        <span>{inputMsg}</span>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </HighOrderComponent>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
