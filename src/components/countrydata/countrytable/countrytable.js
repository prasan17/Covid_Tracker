import React, { Component } from 'react';
class Countrytable extends Component {
    constructor() {
        super();
        this.state = {
            countrydetail: null
        }
    }
    async componentDidMount() {
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ countrydetail: data.Countries })
    }
    render() {
        return (
            this.state.countrydetail ?
                this.state.countrydetail.map((item, index) =>
                    <tr key={index}>
                        <td>{item.Country}</td>
                        <td><div className="cases-wrapper">
                            <span className="delta-confirmed">+{item.NewConfirmed}</span>
                            <div className="cases-confirmed">{item.TotalConfirmed}</div>
                        </div>
                        </td>
                        <td>
                            <div className="cases-wrapper">
                                <span className="delta-recovered">+{item.NewRecovered}</span>
                                <div className="cases-recovered">{item.TotalRecovered}</div>
                            </div>
                        </td>
                        <td>
                            <div className="cases-wrapper">
                                <span className="delta-deaths">+{item.NewDeaths}</span>
                                <div className="cases-deaths">{item.TotalDeaths}</div>
                            </div></td>
                    </tr>
                )
                :
                null
        );
    }
}
export default Countrytable;