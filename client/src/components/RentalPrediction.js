import React from 'react';
import './RentalPrediction.css';

const RentalPrediction = (props) => {
    let encodedAddress = props.street_address || '43 Friedrich Strasse'
    encodedAddress = encodeURI(encodedAddress);
    
    const translatedRentalData = JSON.parse(JSON.stringify(props.rentalData));
    // To easily translate enumerations, we can construct an array of strings, then just select the array element with the given index.
    //0 = Private Room, 1 = Entire House, 2 = Other
    if (translatedRentalData.street_addr === '1001 Berlin Drive') translatedRentalData.street_addr = '';
    translatedRentalData.room_type = ['Private Room', 'Entire House', 'Other'][translatedRentalData.room_type]
    if (translatedRentalData.accommodates === 0) translatedRentalData.accommodates = '';
    if (translatedRentalData.bathrooms === 0) translatedRentalData.bathrooms = '';
    if (translatedRentalData.bedrooms === 0) translatedRentalData.bedrooms = '';
    if (translatedRentalData.security_deposit === 0) translatedRentalData.security_deposit = '';
    if (translatedRentalData.cleaning_fee === 0) translatedRentalData.cleaning_fee = '';
    if (translatedRentalData.extra_people === 0) translatedRentalData.extra_people = '';
    // cancellation_policy - int(1) - 0 = 14 day grace period, 1 = flexible, 2 = moderate, 3 = 30 day, 4 = 60 day
    translatedRentalData.cancellation_policy = ['14 day grace period', 'flexible', 'moderate', '30 day', '60 day'][translatedRentalData.cancellation_policy]
    if (translatedRentalData.minimum_nights === 0) translatedRentalData.minimum_nights = '';
    // property_type - int(1) - 0 = Guesthouse, 1 = Apartment, 2 = Condo, 3 = House, 4 = Other
    translatedRentalData.property_type = ['Guesthouse', 'Apartment', 'Condo', 'House', 'Other'][translatedRentalData.property_type]

    return <div className='rentalPrediction'> 
        {props.rentalData.price}
        <iframe className='RentalPredictionMap' src="http://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=43%20Friedrich%20Strasse%2C%20Berlin%2C%20Germany+(My%20AirBnB%20Property)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>

        <div className='roomType left'>
            Room Type: {translatedRentalData.room_type}
        </div>
        <div className='propertyType left '>
            Property Type: {translatedRentalData.property_type}
        </div>
        <div className='numberOfGuests left'>
            Number of Guests: {translatedRentalData.accommodates}
        </div>
        <div className='minimumNights left'>
            Minimum Nights Stay: {translatedRentalData.minimum_nights}
        </div>
        <div className='bathrooms left'>
            Number of Bathrooms: {translatedRentalData.bathrooms}
        </div>
        <div className='bedrooms left'>
            Number of Bedrooms: {translatedRentalData.bedrooms}
        </div>
        <div className='beds left'>
            Number of Beds: {translatedRentalData.beds}
        </div>
        <div className='securityDeposit left'>
            Amount of Security Deposit: {translatedRentalData.security_deposit}
        </div>
        <div className='cleaningFee left'>
            Amount of Cleaning Fee: {translatedRentalData.cleaning_fee}
        </div>
        <div className='extraPeople left'>
            Amount of Extra Person fee: {translatedRentalData.extra_people}
        </div>
        <div className='cancellationPolicy left'>
            Cancellation Policy: {translatedRentalData.cancellation_policy}
        </div>

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