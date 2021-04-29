import React from 'react';

const Bands = props => {
    // debugger;
    const bandList = props.bands.map((band, index) => <li key={index}>{band.name}</li>)

    return (
        <ul>
            {bandList}
        </ul>
    )
}

export default Bands;