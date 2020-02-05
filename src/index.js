import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import App from './components/App';
import  reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// AQDcCZF5QnyI7UkuKS6L7iquxcXkKNwerL_Nv-awIPqKw4gXqVcgG-lMvytP7-GFI_bBBwx8R95QTg3qW9KtiOyBY8-V8-rDEE6V_Mk0GgwnDfVWIvVvFffBe-hmgpe2NW0
