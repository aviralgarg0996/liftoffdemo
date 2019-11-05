import { SET_ANSWER, SUBMIT_ANSWER, CLEAR_FORM } from "./types";

export const setAnswer = (value,key) => dispatch => {
    dispatch({
     type: SET_ANSWER,
     payload: {value,key}
    })
   }
   export const getAnswer = (correct,incorrect) => dispatch => {
    dispatch({
     type: SUBMIT_ANSWER,
     payload:{correct,incorrect}
    })
   }
   export const clearData = () => dispatch => {
    dispatch({
     type: CLEAR_FORM,
    })
   } 