import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  rootReducer  from './store/reducers';
import './app.scss';
import AnswerComponent from './components/AnswerComponent';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
< AnswerComponent/>
</Provider>
    , document.getElementById('app')
)




