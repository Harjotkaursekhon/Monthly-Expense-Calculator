import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const Chart=({chatdata})=>{
  const chartConfigs = {
    type: 'line',
    width: 400,
    height: 350,
    dataFormat: 'json',
    dataSource: {
    chart: {
        caption: "Chart",                //Set the chart subcaption
        xAxisName: "iteration",           //Set the x-axis name
        theme: "candy"                 //Set the theme for your chart
      },
      data:chatdata
     },
  };
    return<ReactFC {...chartConfigs}/>;
  }
 export default Chart;