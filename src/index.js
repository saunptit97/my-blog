import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import { allReducer } from './reducers/allReducer';
const store = createStore(allReducer);

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
