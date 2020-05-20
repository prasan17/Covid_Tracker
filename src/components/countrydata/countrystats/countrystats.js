import React, { Component } from 'react';
import './countrystats.scss';
class Countrystats extends Component {
    constructor() {
        super();
        this.state = {
            detail: null
        }
    }
    async componentDidMount() {
        const url = "https://api.thevirustracker.com/free-api?global=stats";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ detail: data.results });
    }
    render() {
        return (
            <div className="world-stats__wrapper">
                <h1>World Covid-19 Tracker</h1>
                {
                    this.state.detail ?
                        this.state.detail.map((item, index) =>
                            <div key={index} className="world-stats__wrapper-detail">
                                <p className="world-stats__wrapper-total-case"><label>Confirmed Cases : </label>{item.total_cases}</p>
                                <p className="world-stats__wrapper-total-recovered"><label>Recovered : </label>{item.total_recovered}</p>
                                <p className="world-stats__wrapper-total-unresolved"><label>Unresolved Cases : </label>{item.total_unresolved}</p>
                                <p className="world-stats__wrapper-total-death"><label>Deceased : </label>{item.total_deaths}</p>
                                <p className="world-stats__wrapper-total-new-case"><label>New Case : </label>{item.total_new_cases_today}</p>
                                <p className="world-stats__wrapper-new-total-death"><label>New Deceased : </label>{item.total_new_deaths_today}</p>
                                <p className="world-stats__wrapper-active-case"><label>Active Case : </label>{item.total_active_cases}</p>
                                <p className="world-stats__wrapper-affected-countries"><label>Affected Countries : </label>{item.total_affected_countries}</p>
                            </div>
                        )
                        :
                        null
                }
            </div>
        );
    }
}
export default Countrystats;