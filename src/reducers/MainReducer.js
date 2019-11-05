import { SET_ANSWER, SUBMIT_ANSWER, CLEAR_FORM } from "../actions/types";

const initialState = {
    answers: {},
    correctAnswers: 0,
    incorrectAnswers: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ANSWER:
            state.answers[action.payload.key] = action.payload.value
            return { ...state, answers: Object.assign({}, state.answers) }

        case SUBMIT_ANSWER:
            return { ...state, correctAnswers: action.payload.correct, incorrectAnswers: action.payload.incorrect }

        case CLEAR_FORM:
            return Object.assign(initialState,{answers:{}})
        default:
            return state
    }
}