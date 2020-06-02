import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
const Chartconfirmed = () => {
    const [chartdata, setChartdata] = useState({});
    const chart = () => {
        let date = [];
        let confirmed = [];
        axios
            .get('https://api.covid19india.org/data.json')
            .then(response => {
                for (const dataObj of response.data.cases_time_series) {
                    date.push(new Date(dataObj.date));
                    confirmed.push(parseInt(dataObj.totalconfirmed));
                }
                setChartdata({
                    labels: date,
                    datasets: [{
                        data: confirmed,
                        label: 'Total Confirmed Cases',
                        backgroundColor: [
                            'rgba(255,7,58,0.005)'
                        ],
                        borderWidth: 4,
                        borderColor: '#ff073a'
                    }]
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        chart();
    }, []);
    return (
        <div className="charts__wrapper1">
            <Line data={chartdata} options={{
                responsive: true,
                title: {
                    text: 'Total Confirmed',
                    display: true,
                    fontSize: 18,
                    fontColor: 'rgba(255, 7, 58, .6)',
                    fontFamily: "Verdana"
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(255,7,58,.6)',
                                fontSize: 12,
                                fontFamily: "Verdana",
                                autoSkip: true,
                                maxTicksLimit: 10
                            },
                            gridLines: {
                                display: false
                            },
                        }
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            type: 'time',
                            ticks: {
                                fontColor: 'rgba(255,7,58,.6)',
                                fontSize: 12,
                                fontFamily: "Verdana",
                                autoSkip: true,
                                maxTicksLimit: 12
                            },
                        }
                    ]
                }
            }} />
        </div>
    );
}

export default Chartconfirmed;
