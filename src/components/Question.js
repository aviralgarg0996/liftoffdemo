import React from 'react';
import { Select } from 'antd';
import { connect } from "react-redux"
import { setAnswer } from '../actions/userAction';
const { Option } = Select;

 function Question(props){
    return(
        <div style={{borderWidth:"2px",borderColor:"black",margin:15}}>
            <div style={{backgroundColor:"rgb(74,74,74)",color:"white"}}>{props.data.ques}</div>
            <div style={{padding:20,backgroundColor:"rgb(245,245,245)"}}>
        <Select 
        value={props.answers[props.data.key]}
        style={{ width: 120 }} 
        placeholder="Select"
        onChange={(val)=>props.setQuestion(val,props.data.key)}>
        {props.data.options.map((item,key)=><Option key value={item}>{item}</Option>)}
     </Select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      answers: state.mainReducer.answers,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      setQuestion: (data,history) => dispatch(setAnswer(data,history)),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Question)

