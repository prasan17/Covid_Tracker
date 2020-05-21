import React from 'react';
import Countrytable from '../countrytable/countrytable';
import './countrytablestats.scss';
const Countrytablestats = (props) => {
    return (
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
                    <Countrytable />
                </tbody>
            </table>
        </div>
    );
}
export default Countrytablestats;