import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchworld from '../../search/searchworld';
const Countrytable = () => {
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('https://api.covid19api.com/summary')
            .then(response => {
                setCountry(response.data.Countries);
            })
            .catch(err => {
                console.log(err);
            })
    });
    const handleSearch = (e) => {
        setSearch(
            e.target.value
        )
    }
    const filtercountry = country
        .filter((countryname) => {
            return countryname.Country
                .toLowerCase()
                .includes(search
                    .toLowerCase())
        });
    return (
        <>
            <Searchworld handlewolrdData={handleSearch} />
            <div className="country-tablestats">
                <h1>World Table Detail</h1>
                <table className="country-datatable">
                    <thead>
                        <tr>
                            <th className="country">
                                Country
                        </th>
                            <th className="confirmed">
                                Confirmed
                        </th>
                            <th className="recovered">
                                Recovered
                        </th>
                            <th className="deceased">
                                Deceased
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {country ?
                            filtercountry.map((item, index) =>
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
                            null}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Countrytable;