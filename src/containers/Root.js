import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './app/App';

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <App welcomeMsg={'Welcome modafuckers'} />
            </Provider>
        );
    }
}

export default Root;

/*return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App welcomeMsg={'Welcome modafuckers'} />
        </ConnectedRouter>
    </Provider>
);*/
