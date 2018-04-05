import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {MainRoutes} from './MainRoutes'


ReactDOM.render(<MainRoutes />, document.getElementById('root'));
registerServiceWorker();
