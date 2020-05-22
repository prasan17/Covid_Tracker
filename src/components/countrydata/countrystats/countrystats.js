import React, { useEffect, useState } from 'react';
import './countrystats.scss';
const Countrystats = () => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const url = "https://api.thevirustracker.com/free-api?global=stats";
            const response = await fetch(url);
            const data = await response.json();
            setDetail(data.results);
        }
        fetchdata();
    }, []);
    return (
        <div className="world-stats__wrapper">
            <h1>World Covid-19 Tracker</h1>
            {
                detail.map((item, index) =>
                    <div key={index} className="world-stats__wrapper-detail">
                        <p className="world-stats__wrapper-total-case"><label>Confirmed Cases : </label>{item.total_cases}</p>
                        <p className="world-stats__wrapper-total-recovered"><label>Recovered : </label>{item.total_recovered}</p>
                        <p className="world-stats__wrapper-total-unresolved"><label>Unresolved Cases : </label>{item.total_unresolved}</p>
                        <p className="world-stats__wrapper-total-death"><label>Deceased : </label>{item.total_deaths}</p>
                        <p className="world-stats__wrapper-total-new-case"><label>New Case : </label>{item.total_new_cases_today}</p>
                        <p className="world-stats__wrapper-new-total-death"><label>New Deceased : </label>{item.total_new_deaths_today}</p>
                        <p className="world-stats__wrapper-active-case"><label>Active Case : </label>{item.total_active_cases}</p>
                        <p className="world-stats__wrapper-serious-case"><label>Serious Case : </label>{item.total_serious_cases}</p>
                        <p className="world-stats__wrapper-affected-countries"><label>Affected Countries : </label>{item.total_affected_countries}</p>
                    </div>
                )
            }
        </div>
    );
}
export default Countrystats;