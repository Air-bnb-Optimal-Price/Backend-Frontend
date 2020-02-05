import React from 'react';
import './RentalPrediction.css';

const RentalPrediction = (props) => {
    return <div> 
        {props.predictedPrice}
    </div>
}

export default RentalPrediction;


// country: STRING,
// zip: STRING,
// street_addr: STRING,
// long: INTEGER,
// lat: INTEGER,
// room_type: INTEGER,
// accomodates: INTEGER,
// bathrooms: FLOAT,
// bedrooms: INTEGER,
// beds: INTEGER,
// security_deposit: FLOAT,
// cleaning_fee: FLOAT,
// extra_people: FLOAT,
// cancellation_policy: INTEGER,
// price: INTEGER,
// minimum_nights: INTEGER,
// property_type: INTEGER,
// availability_365: INTEGER,