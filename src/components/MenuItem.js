import React from 'react';


const MenuItem = ({ name, description, price, onModifyPrice }) => {
    const handleModifyPrice = () => {
        onModifyPrice(name);
    };

    return (
        <div className="meniu-item">
            <h2>{name}</h2>
            <p>{description}</p>
            <span className="price">{price} RON</span>
            <button onClick={handleModifyPrice}>Modify Price</button>
        </div>
    );
};

export default MenuItem;
