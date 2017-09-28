import React from 'react';
import ReactDOM from 'react-dom';

import configureStore, { history } from './redux/store/configStore';

import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = configureStore();

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root'));
registerServiceWorker();
