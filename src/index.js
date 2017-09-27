import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore, { history } from './redux/store/configStore';

import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

render(<App welcomeMsg={'Welcome modafuckers'} />, document.getElementById('root'));
registerServiceWorker();
