import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
const LineCharts = () => {
    const [chartdata, setChartdata] = useState({});
    const chart = () => {
        let activedate = [];
        let recovered = [];
        let confirmed = [];
        let deceased = [];
        axios
            .get('https://api.covid19india.org/data.json')
            .then(response => {
                response.data.cases_time_series.forEach((dataObj, index) => {
                    activedate.push((dataObj.date));
                    recovered.push(parseInt(dataObj.totalrecovered));
                    confirmed.push(parseInt(dataObj.totalconfirmed));
                    deceased.push(parseInt(dataObj.totaldeceased));
                });
                setChartdata({
                    labels: activedate,
                    datasets: [{
                        data: recovered,
                        label: 'Totol Recovered Cases',
                        backgroundColor: [
                            'rgba(40, 167, 69, 0.2)'
                        ],
                        borderWidth: 4,
                        borderColor: 'rgb(40, 167, 69)'
                    }, {
                        data: confirmed,
                        label: 'Total Confirmed Cases',
                        backgroundColor: [
                            'rgba(255,7,58,0.2)'
                        ],
                        borderWidth: 4,
                        borderColor: '#ff073a'
                    },
                    {
                        data: deceased,
                        label: 'Total Deceased Cases',
                        backgroundColor: [
                            'rgba(108,117,125,0.2)'
                        ],
                        borderWidth: 4,
                        borderColor: '#6c757d'
                    }
                    ],
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
        <div className="charts__wrapper-Line">
            <Line data={chartdata} options={{
                responsive: true,
                title: {
                    text: 'Chart of Total Confirmed, Recovered, Deceased in India',
                    display: true,
                    fontSize: 16,
                    fontColor: '#4b1eaa',
                    fontFamily: "Verdana"
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                fontColor: '#4b1eaa',
                                fontSize: 12,
                                fontFamily: "Verdana-Bold",
                                autoSkip: true,
                                maxTicksLimit: 20,
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
                                fontColor: '#4b1eaa',
                                fontSize: 12,
                                fontFamily: "Verdana-Bold",
                                autoSkip: true,
                                maxTicksLimit: 30,
                            },
                        }
                    ]
                }
            }} />
        </div>
    );
}

export default LineCharts;
