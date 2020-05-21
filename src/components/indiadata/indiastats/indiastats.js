import React, { Component } from 'react';
class Indiastats extends Component {
    constructor() {
        super();
        this.state = {
            detail: null
        }
    }
    async componentDidMount() {
        const url = "https://api.covid19india.org/data.json";
        const response = await fetch(url);
        const data = await response.json();
        var updatedsata = data.statewise.slice(0, 1);
        this.setState({ detail: updatedsata });
    }
    render() {
        return (
            <div className="world-stats__wrapper">
                <h1>India Covid-19 Tracker</h1>
                {
                    this.state.detail ?
                        this.state.detail.map((item, index) =>
                            <div key={index} className="world-stats__wrapper-detail">
                                <p className="world-stats__wrapper-total-case"><label>Total Cases : </label>{item.confirmed}</p>
                                <p className="world-stats__wrapper-total-recovered"><label>New Case : </label>{item.deltaconfirmed}</p>
                                <p className="world-stats__wrapper-total-unresolved"><label>Active Cases : </label>{item.active}</p>
                                <p className="world-stats__wrapper-total-death"><label>Recovered : </label>{item.recovered}</p>
                                <p className="world-stats__wrapper-total-new-case"><label>Deceased : </label>{item.deaths}</p>
                                <p className="world-stats__wrapper-new-total-death"><label>New Deceased : </label>{item.deltadeaths}</p>
                            </div>
                        )
                        :
                        null
                }
            </div>
        );
    }
}
export default Indiastats;