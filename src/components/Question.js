import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default function Question(props){
    return(
        <div style={{borderWidth:"2px",borderColor:"black",margin:15}}>
            <div style={{backgroundColor:"rgb(74,74,74)",color:"white"}}>{props.data.ques}</div>
            <div style={{padding:20,backgroundColor:"rgb(245,245,245)"}}>
        <Select style={{ width: 120 }} 
        placeholder="Select"
        onChange={props.handleChange}>
        {props.data.options.map(item=><Option value={item}>{item}</Option>)}
     </Select>
            </div>
        </div>
    )
}