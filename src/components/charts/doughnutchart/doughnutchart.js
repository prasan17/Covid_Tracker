import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
const Doughnutchart = () => {
    const [totaldata, settotaldata] = useState({});
    const chart = () => {
        let totalsamplestested = [];
        let updatetimestamp = [];
        axios
            .get('https://api.covid19india.org/data.json')
            .then(response => {
                response.data.tested.forEach((dataObj, index) => {
                    updatetimestamp.push((dataObj.updatetimestamp));
                    totalsamplestested.push(parseInt(dataObj.totalsamplestested));
                });
                settotaldata({
                    labels: updatetimestamp,
                    datasets: [{
                        data: totalsamplestested,
                        label: 'Totol Sample Tested',
                        backgroundColor: [
                            'rgba(255,7,58,0.2)'
                        ],
                    }],
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
        <div className="charts__wrapper-Doughnut">
            <Doughnut data={totaldata} options={{
                responsive: true,
                title: {
                    text: 'Chart on Total Testing in India',
                    display: true,
                    fontSize: 16,
                    fontColor: '#4b1eaa',
                    fontFamily: "Verdana"
                },
            }} />
        </div>
    );
}

export default Doughnutchart;
