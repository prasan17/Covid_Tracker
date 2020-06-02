import React from 'react'
import './charts.scss';
import LineCharts from './linecharts/linecharts';
// import Doughnutchart from './doughnutchart/doughnutchart';
function charts() {
    return (
        <main className="charts_wrapper">
            <LineCharts />
            {/* <Doughnutchart /> */}
        </main>
    )
}
export default charts;
