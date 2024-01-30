import React, { useState } from 'react';
import './meniu.css';
import MenuItem from 'C:/FRONTEND/project/src/components/MenuItem.js';

export default function Meniu() {
    const [modifiedPrice, setModifiedPrice] = useState(false);

    const handleModifyPrice = (menuItem) => {
        console.log(`Modifying price for ${menuItem}`);
        setModifiedPrice(true);
    };

    return (
        <div className="meniu-container">
            <h1>Meniu Aroma Delicioasă</h1>

            <MenuItem name="Cafea Neagră" description="O cafea tare și aromată." price={15} onModifyPrice={handleModifyPrice} />
            <MenuItem name="Cappuccino" description="O băutură delicioasă cu spumă de lapte și esență de cafea." price={10}onModifyPrice={handleModifyPrice}  />
            <MenuItem name="Latte" description="Un amestec perfect de cafea espresso și lapte spumat." price={12}onModifyPrice={handleModifyPrice}  />
            <MenuItem name="Americano" description="O cafea neagră diluată cu apă caldă." price={8} onModifyPrice={handleModifyPrice} />
            <MenuItem name="Mocha" description="Cafea cu ciocolată și lapte spumat." price={10} onModifyPrice={handleModifyPrice} />
            <MenuItem name="Espresso" description="Un shot concentrat de cafea." price={5} onModifyPrice={handleModifyPrice} />
           

            {modifiedPrice && <p>Price modified!</p>}
        </div>
    );
}


  