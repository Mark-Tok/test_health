export const ANSWER_YES = 'ANSWER_YES';
export const ANSWER_NO = 'ANSWER_NO';
export const ANSWER_MAYBE = 'ANSWER_MAYBE';
export const TEST_BEGIN = 'TEST_BEGIN';
export const TEST_RESET = 'TEST_RESET';

export const testBegin = (counter) => {
    return {
        type: TEST_BEGIN,
        payload: counter + 1
    }
}

export const actionYesAnswer = (answerYes, counter) => {
    return {
        type: ANSWER_YES,
        payload: {
            countAnswer: answerYes + 1,
            countQuestion: counter + 1
        }
    }
}

export const actionNoAnswer = (answerNo, counter) => {
    return {
        type: ANSWER_NO,
        payload: {
            countAnswer: answerNo + 1,
            countQuestion: counter + 1
        }
    }
}

export const actionMaybeAnswer = (answerMaybe, counter) => {
    return {
        type: ANSWER_MAYBE,
        payload: {
            countAnswer: answerMaybe + 1,
            countQuestion: counter + 1
        }
    }
}

export const testReset = (counter, answerNo, answerYes, answerMaybe) => {
    return {
        type: TEST_RESET,
        payload: {
            resetCounter: counter * 0,
            resetAnswerNo: answerNo * 0,
            resetAnswerYes: answerYes * 0,
            resetAnswerMaybe: answerMaybe * 0,
        }
    }
}