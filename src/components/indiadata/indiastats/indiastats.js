import React, { useState, useEffect } from 'react';
const Indiastats = () => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const url = "https://api.covid19india.org/data.json";
            const response = await fetch(url);
            const data = await response.json();
            var updatedsata = data.statewise.slice(0, 1);
            setDetail(updatedsata);
        }
        fetchdata();
    }, []);
    return (
        <div className="world-stats__wrapper">
            <h1>India Covid-19 Tracker</h1>
            {
                detail.map((item, index) =>
                    <div key={index} className="world-stats__wrapper-detail">
                        <p className="world-stats__wrapper-total-case"><label>Total Cases : </label>{item.confirmed}</p>
                        <p className="world-stats__wrapper-total-recovered"><label>New Case : </label>{item.deltaconfirmed}</p>
                        <p className="world-stats__wrapper-total-unresolved"><label>Active Cases : </label>{item.active}</p>
                        <p className="world-stats__wrapper-total-death"><label>Recovered : </label>{item.recovered}</p>
                        <p className="world-stats__wrapper-total-new-case"><label>Deceased : </label>{item.deaths}</p>
                        <p className="world-stats__wrapper-new-total-death"><label>New Deceased : </label>{item.deltadeaths}</p>
                    </div>
                )
            }
        </div>
    );
}
export default Indiastats;