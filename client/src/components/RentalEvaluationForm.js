import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import './RentalEvaluationForm.css';


const RentalEvaluationForm = () => {
    const [guestCount, setGuestCount] = useState(1);

    return <div className='rentalEvaluationContainer'>
        <h1>Rental Evaluation Form</h1>
        <div className='rentalInput'>
            <form>
                <div className='guestCount'>
                    <div className={(guestCount>0)?'guestIcon selected':'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div className={(guestCount>1)?'guestIcon selected':'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div className={(guestCount>2)?'guestIcon selected':'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div className={(guestCount>3)?'guestIcon selected':'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div className={(guestCount>4)?'guestIcon selected':'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div className={(guestCount>5)?'guestIcon selected':'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                </div>
            </form>
        </div>
        <div className='rentalPrediction'>
        </div>
    </div>
}

export default RentalEvaluationForm;


// id - int(20) - Your DB id for the listing. Will be used to GET data when no changes need to be made
// summary - string < 300 - Brief description of the property and keywords ("Great Location!")
// host_is_superhost - bool - Is the user host a super member?
// latitude - float/number - 15 decimal places
// longitude - float/number - 15 decimal places
// property_type - int(1) - 0 = Guesthouse, 1 = Apartment, 2 = Condo, 3 = House, 4 = Other
// room_type - int(1) - 0 = Private Room, 1 = Entire House, 2 = Other
// accomodates - int(1) <= 6 - How many people can it handle? 
// bathrooms - int(1) <= 5 - How many bathrooms?
// bedrooms - float/number(2) <= 5 - How many bedrooms?
// beds - int(1) <= 5 - How many beds are available?
// security_deposit - float/number(2 decimal places) - If there is a security deposit, how much? If none, 0.00
// cleaning_fee - float/number(2 decimal places) - If there is a cleaning fee, how much? If none, 0.00
// extra_people - float/number(2 decimal places) - Is there a fee for guests?
// minimum_nights - int(4) <= 1255 - Minimum time a guest **has** to stay
// cancellation_policy - int(1) - 0 = 14 day grace period, 1 = flexible, 2 = moderate, 3 = 30 day, 4 = 60 day
