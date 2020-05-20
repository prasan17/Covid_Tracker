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
            <div>
                <h1>World Table Detail</h1>
                {
                    this.state.countrydetail ?
                        this.state.countrydetail.map((item, index) =>
                            <div key={index}>
                                <p><label>Country Name : </label>{item.Country}</p>
                            </div>
                        )
                        :
                        null
                }
            </div>
        );
    }
}
export default Countrytable;