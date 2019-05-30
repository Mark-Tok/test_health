import {ANSWER_YES, ANSWER_NO, ANSWER_MAYBE, TEST_BEGIN, TEST_RESET} from './actions'

const defaultState = {
    counter: 0,
    answerNo: 0,
    answerYes: 0,
    answerMaybe: 0,
    answerArray:function() {
      return  [this.answerNo, this.answerYes, this.answerMaybe]
    },
}
    
export default  (state = defaultState, action) => {
        switch(action.type) {

            case TEST_BEGIN:
            return {...state, 
                counter:action.payload}    

            case ANSWER_YES:
            return {...state, 
                answerYes: action.payload.countAnswer, 
                counter: action.payload.countQuestion
            };

            case ANSWER_NO: 
            return{...state, 
                answerNo: action.payload.countAnswer, 
                counter: action.payload.countQuestion
            } ;

            case ANSWER_MAYBE: 
            return {...state, 
                answerMaybe: action.payload.countAnswer, 
                counter: action.payload.countQuestion
            };

            case TEST_RESET:
            return {...state, 
                counter:action.payload.resetCounter, 
                answerNo:action.payload.resetAnswerNo, 
                answerYes:action.payload.resetAnswerYes, 
                answerMaybe:action.payload.resetAnswerMaybe} 
            }

        return state;       
    }

