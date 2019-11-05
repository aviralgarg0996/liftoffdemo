import React from 'react'
import { Chart } from "react-google-charts";
import { connect } from "react-redux"

function MyChart(props) {

    return (
      <Chart
      width={'100%'}
      height={'60%'}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={[
        [
          'Correct',
          'Incorrect',
          { role: 'style' },
          {
            role: 'annotation',
            type: 'string',
            calc: 'stringify',
          },
        ],
        ['Correct', props.correct, '#b87333', null],
        ['Incorrect', props.incorrect, 'silver', null],
       ]}
      options={{
        width: 600,
        height: 400,
        bar: { groupWidth: '95%' },
        legend: { position: 'none' },
      }}
     />
    )
  }

  const mapStateToProps = (state) => {
    return {
      correct:state.mainReducer.correctAnswers,
      incorrect:state.mainReducer.incorrectAnswers

    }
  }
export default connect(mapStateToProps, null)(MyChart)