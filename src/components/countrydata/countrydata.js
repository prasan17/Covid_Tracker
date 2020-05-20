import React, { Component } from 'react';
import Countrystats from './countrystats/countrystats';
// import Countrytable from './countrytable/countrytable';
class Countrydata extends Component {
    render() {
        return (
            <div>
                <Countrystats />
                {/* <Countrytable /> */}
            </div>
        );
    }
}
export default Countrydata;