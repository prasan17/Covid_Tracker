import React from 'react'
import './charts.scss';
import LineCharts from './linecharts/linecharts';
function charts() {
    return (
        <main className="charts_wrapper">
            <LineCharts />
        </main>
    )
}
export default charts;
