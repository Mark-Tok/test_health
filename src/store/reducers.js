import {combineReducers} from 'redux';
import answerReducer from './answercomponent/reducers'

const rootRedecer = combineReducers({
    answer: answerReducer,
}) 

export default rootRedecer;


    
  