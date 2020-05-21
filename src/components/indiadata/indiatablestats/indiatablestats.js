import React from 'react';
import Indiatable from '../indiatable/indiatable';
const Indiatablestats = (props) => {
    return (
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
                    </tr>
                </thead>
                <tbody>
                    <Indiatable />
                </tbody>
            </table>
        </div>
    );
}
export default Indiatablestats;