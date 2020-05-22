import React, { Component } from 'react';
import Countrystats from './countrystats/countrystats';
import Countrytablestats from './countrytablestats/countrytablestats';
class Countrydata extends Component {
    render() {
        return (
            <main>
                <Countrystats />
                <Countrytablestats />
            </main>
        );
    }
}
export default Countrydata;