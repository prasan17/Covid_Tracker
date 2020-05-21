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
                        <td>{item.confirmed}</td>
                        <td>{item.active}</td>
                        <td>{item.recovered}</td>
                        <td>{item.deaths}</td>
                    </tr>
                )
                :
                null
        );
    }
}
export default Indiatable;