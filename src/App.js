import React from 'react';
import './App.css';
import Question from './components/Question';
import MyChart from "./components/Chart"
import "antd/dist/antd.css";
import {Row,Col} from 'antd'
import {questionsdata} from "./utils/Data"
import {Button} from 'antd'
function App() {
  return (
    <div className="App">
      <Row>
      <Col
      span={12}>
      {questionsdata.map(data=><Question 
      handleChange={(data)=>console.log("data",data)}
      data={data}/>)}
      <div style={{alignItems:"center",display:"flex",backgroundColor:"red"}}>
      <Button>Submit</Button>
      <Button>Clear</Button>
      </div>
      </Col>
      <Col span={12}><MyChart/></Col>
    </Row>
    </div>
  );
}

export default App;
