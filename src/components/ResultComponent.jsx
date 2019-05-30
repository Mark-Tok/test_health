import React from 'react';
import { connect } from 'react-redux';
import { testReset} from '../store/answercomponent/actions';
import result from '../js/result';

class ResultComponent extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
      }
      reset() {
         const {testReset,counter,answerNo,answerYes, answerMaybe} = this.props;
         testReset(counter,answerNo,answerYes, answerMaybe)
      };
    render() {
        const{answer} = this.props;
        if(answer.indexOf(Math.max(...answer)) === 0) {
            return(
                <div className="result">
                    <div className="result__content">
                        <div className="result__title">{result[0].resultTitle}</div>
                        <img src={result[0].resultImage} alt=""/>
                        <div className="result__description">{result[0].resultDescription}</div>
                    </div>
                    <button onClick={this.reset}>Пройти тест заново</button> 
                </div>
            )
        }
        else if (answer.indexOf(Math.max(...answer)) === 1) {
            return(
                <div className="result">
                    <div>
                        <div className="result__title">{result[1].resultTitle}</div>
                        <img src={result[1].resultImage} alt=""/>
                        <div className="result__description">{result[1].resultDescription}</div>
                    </div>
                    <button onClick={this.reset}>Пройти тест заново</button> 
                </div>
            )
        }
        else if(answer.indexOf(Math.max(...answer)) === 2) {
            return(
                <div className="result">
                    <div>
                        <div className="result__title">{result[2].resultTitle}</div>
                        <img src={result[2].resultImage} alt=""/>
                        <div className="result__description">{result[2].resultDescription}</div>
                    </div>
                    <button onClick={this.reset}>Пройти тест заново</button> 
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        answer: state.answer.answerArray(),
        counter: state.answer.counter,
        answerNo: state.answer.answerNo,
        answerYes: state.answer.answerYes,
        answerMaybe: state.answer.answerMaybe,
    }
}
const mapActionToProps = 
{
    testReset
}
export default connect(mapStateToProps, mapActionToProps)(ResultComponent);