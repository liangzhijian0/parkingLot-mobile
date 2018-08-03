import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import rootReducer from './reducers/index'
import {Provider} from "react-redux"
import {BrowserRouter as Router, Route} from 'react-router-dom'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/test" component={Test}></Route>
                <Route path="/home" component={App}></Route> 
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
