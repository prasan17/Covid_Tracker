import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
const Chartrecovered = () => {
    const [chartdata, setChartdata] = useState({});
    const chart = () => {
        let activedate = [];
        let recovered = [];
        axios
            .get('https://api.covid19india.org/data.json')
            .then(response => {
                for (const dataObj of response.data.cases_time_series) {
                    activedate.push(new Date(dataObj.date));
                    recovered.push(parseInt(dataObj.totalrecovered));
                }
                setChartdata({
                    labels: activedate,
                    datasets: [{
                        data: recovered,
                        label: 'Line Dataset',
                        backgroundColor: [
                            'rgba(40, 167, 69, 0.005)'
                        ],
                        borderWidth: 4,
                        borderColor: 'rgb(40, 167, 69)'
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
        <div className="charts__wrapper2">
            <Line data={chartdata} options={{
                responsive: true,
                title: {
                    text: 'Total Recovered',
                    display: true,
                    fontSize: 18,
                    fontColor: 'rgba(40,167,69,.6)',
                    fontFamily: "Verdana"
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(40,167,69,.6)',
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
                                fontColor: 'rgba(40,167,69,.6)',
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

export default Chartrecovered;
