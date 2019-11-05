import React from 'react';
import MyChart from "./components/Chart"
import Puzzle from './containers/Puzzle';
import "antd/dist/antd.css";
import {Row,Col} from 'antd'

function App() {
  return (
    <div className="App">
      <Row><Col span={12}><Puzzle/></Col>
      <Col span={12}><MyChart/></Col>
    </Row>
    </div>
  );
}

export default App;
