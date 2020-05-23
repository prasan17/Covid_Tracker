import React, { Component } from 'react';
class Indiatable extends Component {
    constructor() {
        super();
        this.state = {
            countrydetail: null
        }
    }
    async componentDidMount() {
        const url = "https://api.covid19india.org/data.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ countrydetail: data.statewise })
    }
    render() {
        return (
            this.state.countrydetail ?
                this.state.countrydetail.map((item, index) =>
                    <tr key={index}>
                        <td>{item.state}</td>
                        <td><div className="cases-wrapper">
                            <span className="delta-confirmed">+{item.deltaconfirmed}</span>
                            <div className="cases-confirmed">{item.confirmed}</div>
                        </div></td>
                        <td>
                            {item.active}</td>
                        <td><div className="cases-wrapper">
                            <span className="delta-recovered">+{item.deltarecovered}</span>
                            <div className="cases-recovered">{item.recovered}</div>
                        </div>
                        </td>
                        <td>
                            <div className="cases-wrapper">
                                <span className="delta-deaths">+{item.deltadeaths}</span>
                                <div className="cases-deaths">{item.deaths}</div>
                            </div></td>
                        <td>{item.lastupdatedtime}</td>
                    </tr >
                )
                :
                null
        );
    }
}
export default Indiatable;