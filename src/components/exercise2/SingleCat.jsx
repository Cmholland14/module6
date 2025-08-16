
import React from 'react';

function SingleCat({ name, latinName, image }) {
    return (
        <div className="single-cat" style={{ margin: '10px', textAlign: 'center' }}>
            <img src={image} alt={name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <h3>{name}</h3>
            <p><em>{latinName}</em></p>
        </div>
    );
}

export default SingleCat;
