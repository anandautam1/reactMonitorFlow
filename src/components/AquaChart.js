import React, { Component} from 'react';
// import styled from 'styled-components';
import LiquidChart from 'react-liquidchart';
import hexToRgbString from 'hex-to-rgb-string';
import Paper from '@material-ui/core/Paper';

 class AquaChart extends Component {
     constructor(props){
        super(props);
        const stops = [
            <stop key={1} stopColor={this.props.colour} offset="85%"/>,
          ];
        var rgbString = hexToRgbString(this.props.colour);
        this.state = {
            propsStop: stops,
            propStop: stops,
            rgbString: rgbString,
            label: this.props.label,
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
            <LiquidChart
                responsive
                legend={'index'}
                value={this.props.value}
                showDecimal
                amplitude={4}
                frequency={2}
                animationTime={1000}
                animationWavesTime={1250}
                gradient={{
                  type: 1,
                  x1: 0,
                  x2: 0,
                  y1: 100,
                  y2: 0,
                  propStop,
                }}
                postfix=""
                legendFontSize={1}
                outerStyle={{ fill: rgbString }}
                liquidStyle={{ fill: 'rgb(23, 139, 202)' }}
                dryStyle={{ fill: 'rgb(0, 9, 0)' }}
                wetStyle={{ fill: 'rgb(0, 9, 0)' }}
              />
          </div>
        );
      }
 }

 export default AquaChart;