import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchindia from '../../search/searchindia';
const Indiatable = () => {
    const [state, setState] = useState([]);
    const [err, setErr] = useState('');
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('https://api.covid19india.org/data.json').
            then(response => {
                setState(response.data.statewise)
            }).catch(error => {
                setErr('Error in getting data or Something went wrong')
            });
    })
    const handleSearch = (e) => {
        setSearch(
            e.target.value
        )
    }
    const filterstate = state.filter((statename) => {
        return statename.state.toLowerCase().includes(search.toLowerCase())
    });
    return (
        <React.Fragment>
            <Searchindia handleInput={handleSearch} />
            <div className="country-tablestats">
                <h1>India Table Detail</h1>
                <table className="country-datatable">
                    <thead>
                        <tr>
                            <th className="country">
                                State
                                </th>
                            <th className="confirmed">
                                Confirmed
                                </th>
                            <th className="active">
                                Active
                                </th>
                            <th className="recovered">
                                Recovered
                                </th>
                            <th className="deceased">
                                Deceased
                                </th>
                            <th className="update">
                                Last Update
                                </th>
                        </tr>
                    </thead>
                    <tbody>{
                        state ?
                            filterstate.map((item, index) =>
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
                    }
                        {
                            err ? <tr><td>{err}</td></tr> : null
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
export default Indiatable;