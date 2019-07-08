import test from '../js/test';
import React from 'react';
import { connect } from 'react-redux';
import { actionYesAnswer, actionNoAnswer, actionMaybeAnswer, testBegin} from '../store/answercomponent/actions';
import ResultComponent from './ResultComponent';

class AnswerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.pressAnswer = this.pressAnswer.bind(this);
        this.pressBegin = this.pressBegin.bind(this);
        this.progress = this.progress.bind(this);
      }

      pressAnswer(event) {        
        const {actionNoAnswer, 
               actionYesAnswer, 
               actionMaybeAnswer, 
               answerNo, 
               answerYes, 
               answerMaybe,
               counter
            } = this.props
            
         switch(event.target.value) {
             case '0':
             actionNoAnswer(answerNo, counter);
             break;
             case '1':
             actionYesAnswer(answerYes, counter);
             break;
             case '2':
             actionMaybeAnswer(answerMaybe, counter)    
             break;
         }
      };

      progress() {
          const {counter} = this.props
          return counter.toString() * 10;
      }

      pressBegin() { 
        const {counter, testBegin} = this.props
        testBegin(counter)
      };

    render() {
        const quantityQuestions = test.length - 1;
        const {counter} = this.props

        if(counter === 0) {
            return(       
                <div className="intro">
                    <div>
                    {test[0].titleIntro}
                    
                    </div>
                    <div>
                    {test[0].titleDescription}
                    </div>
                    <button onClick={this.pressBegin}>Начать тест</button>
                </div>
            )
        }
        else if (counter > test.length -1) {
            return(                       
                <ResultComponent/>         
            )
        }
        else {
            return (
            <div className="test"> 
                <div className="test__title">
                    <div>{ test[counter].titleIntro}
                    </div>
                </div>
                <div className="test__answer">
                {
                    test[counter].answer.map((answer, i) => { 
                          return (
                          <button key={i} onClick={this.pressAnswer} value={answer.id}> {answer.title}</button>
                          )
                        }) 
                }
                </div>
                <div style={{width: this.progress() + '%'}} className="bar">   
                {
                    counter + '/' + quantityQuestions                        
                }
            </div>
        </div>)
        }
 
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.answer.counter,
        answer: state.answer.answerArray(),
        answerNo: state.answer.answerNo,
        answerYes: state.answer.answerYes,
        answerMaybe: state.answer.answerMaybe,
    }
}

const mapActionToProps = 
{
    actionYesAnswer, 
    actionNoAnswer,
    actionMaybeAnswer,
    testBegin 
}

export default connect(mapStateToProps, mapActionToProps)(AnswerComponent);