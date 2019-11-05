import React from 'react';
import { questionsdata } from '../utils/Data';
import Question from '../components/Question';
import {Button} from 'antd'
import {clearData, getAnswer } from '../actions/userAction';
import { connect } from "react-redux"

 function Puzzle(props){
    const questions=Object.values(questionsdata)
    const submitAnswer=()=>{
        let answers=Object.entries(props.answers)
        if(answers.length<4)
        alert("Submit All Answers")
        else{
            let correct=0,incorrect=0
            for(let item in questionsdata){
                questionsdata[item].correctAns===props.answers[item]?correct++:incorrect++
            }
            props.setAnswers(correct,incorrect) 
        }
        
     }
     const clearAnswers=()=>{
         props.clearData()
     }
    return(
        <div>
        {questions.map((data,i)=><Question
        key={i}
      data={data}/>)}
       <div style={{alignItems:"center",display:"flex"}}>
      <Button onClick={submitAnswer} >Submit</Button>
      <Button onClick={clearAnswers}>Clear</Button>
      </div>
      </div>
    )
}
const mapStateToProps = (state) => {
    return {
      answers:state.mainReducer.answers
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      setAnswers: (correct,incorrect) => dispatch(getAnswer(correct,incorrect)),
      clearData:()=>dispatch(clearData())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Puzzle)