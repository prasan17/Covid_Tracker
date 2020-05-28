import React from 'react'
function Searchworld(props) {
    return (
        <div className="input_search">
            <input type="text" placeholder="Search your Country !!!!" onChange={props.handlewolrdData} />
        </div>
    )
}

export default Searchworld
