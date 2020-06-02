import React from 'react'
import './charts.scss';
import Chartconfirmed from './chartsconfirmed/chartconfirmed';
import Chartrecovered from './chartsrecovered/chartsrecovered'
function charts() {
    return (
        <main className="charts_wrapper">
            <Chartconfirmed />
            <Chartrecovered />
        </main>
    )
}
export default charts;
