import React from 'react';
import './RentalPrediction.css';

const RentalPrediction = (props) => {
    let encodedAddress = props.street_address || '43 Friedrich Strasse'
    encodedAddress = encodeURI(encodedAddress);
    return <div> 
        {props.predictedPrice}
        <iframe className='RentalPredictionMap' src="http://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=43%20Friedrich%20Strasse%2C%20Berlin%2C%20Germany+(My%20AirBnB%20Property)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
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