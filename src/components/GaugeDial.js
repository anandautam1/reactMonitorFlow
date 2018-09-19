import React, { Component} from 'react';
// import styled from 'styled-components';
import ReactSpeedomter from "react-d3-speedometer"
import Paper from '@material-ui/core/Paper';

 class GaugeDial extends Component {
     constructor(props){
        super(props);
        this.state = {
            label: this.props.label,
            minValue: this.props.minValue,
            maxValue: this.props.maxValue,
            value: this.props.value,
            endColor: this.props.endColor,
            startColor: this.props.startColor,
            segments: this.props.segments,
            needleColor: this.props.needleColor,
        };
    }

    render() {
        const { propStop, rgbString } = this.state;
        return (
          <div
            style={{
              width: '100%',
              height: '230px',
              paddingTop: '20px',
              paddingBottom: '20px',
            }}
          >
            <Paper>
                <h5 style={{textAlign:'center', padding:'10px'}}>{this.state.label}</h5>
            </Paper>
            <ReactSpeedomter 
                value={this.props.value}
                minValue={this.state.minValue}
                maxValue={this.state.maxValue}
                startColor={this.state.startColor}
                needleColor={this.state.needleColor}
                segments={this.state.segments}
                endColor={this.state.endColor}/>
          </div>
        );
      }
 }

 export default GaugeDial;