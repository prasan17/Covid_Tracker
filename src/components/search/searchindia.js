import React from 'react'
function Searchindia(props) {
    return (
        <div className="input_search">
            <input type="text" placeholder="Search your State !!!!" onChange={props.handleInput} />
        </div>
    )
}
export default Searchindia;
