import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RentalEvaluationForm.css';
import axios from 'axios';
import { ReactComponent as ManIcon } from './icons/man.svg';
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as NoBedIcon } from './icons/nobed.svg';
import { ReactComponent as BedIcon } from './icons/bed.svg';
import { ReactComponent as GuestHouse } from './icons/guesthouse.svg';
import { ReactComponent as Apartment } from './icons/apartment.svg';
import { ReactComponent as Condo } from './icons/condo.svg';
import { ReactComponent as House } from './icons/condo.svg';
import { ReactComponent as Other } from './icons/questionmark.svg';
import { ReactComponent as Bathrooms } from './icons/toilet.svg';
import { ReactComponent as CleaningFee } from './icons/cleaning.svg';
import { ReactComponent as SecurityDeposit } from './icons/bank.svg';

const RentalEvaluationForm = () => {
  const [guestCount, setGuestCount] = useState(1);
  const [propertyType, setPropertyType] = useState(1);
  const [extraGuestFee, setExtraGuestFee] = useState(0);
  const [cancellationPolicy, setCancellationPolicy] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [nightStayCount, setNightStayCount] = useState(1);
  const [cleaningFee, setCleaningFee] = useState(0);

  const handleOnclickIcon = (newval) => {
    setGuestCount(newval);
  }
  const handleOnclickPropertyType = (newval) => {
    setPropertyType(newval);
  }
  const handleExtraGuestFee = (e) => {
    setExtraGuestFee(e.target.value);
  }
  const handleCancellationPolicy = (newval) => {
    setCancellationPolicy(newval);
  }
  const handleOnclickBathroom = (newval) => {
    setBathroomCount(newval);
  }
  const handleOnclickBedroom = (newval) => {
    setBedroomCount(newval);
  }
  const handleOnclickNightStay = (newval) => {
    setNightStayCount(newval);
  }
  const handleCleaningFee = (e) => {
    setCleaningFee(e.target.value);
  }
  const handleAddressChange = (address) => {
    var data = {
        "format": "json",
        "addressdetails": 1,
        "q": address,
        "limit": 1
    };
    axios().post("https://nominatim.openstreetmap.org", data)
    .then(res => console.log( res ));
  }

  return <div className='rentalEvaluationContainer'>
    <h1>Rental Evaluation Form</h1>
    <div className='rentalInput'>
      <form>
        {/* Number of guests */}
        <div className='guestCount'>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickIcon(elem + 1) }} className={(guestCount > elem) ? 'guestIcon selected' : 'guestIcon'}>
            <ManIcon />
          </div>)}
        </div>
        {/* Extra guest fee */}
        <div className='extraGuestFee'>
          <span>Fee per extra guest:</span>
          <input
            type='number' min="0.00" step="0.01" max="999"
            placeholder="Extra Guest Fee"
            onChange={handleExtraGuestFee}
            value={extraGuestFee}
            disabled={(guestCount > 1) ? '' : 'disabled'}
          >
          </input>
        </div>
        {/* minimum nights stay */}
        <div className='nightStayCount'>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickNightStay(elem + 1) }} className={(nightStayCount > elem) ? 'nightsIcon selected' : 'nightsIcon'}>
            <MoonIcon />
          </div>)}
          <div onClick={() => { handleOnclickNightStay(7) }} className={(nightStayCount > 6) ? 'nightsIcon selected' : 'nightsIcon'}>
            <PlusIcon />
          </div>
        </div>
        {/* number of bedrooms */}
        <div className='bedroomCount'>
          <div onClick={() => { handleOnclickBedroom(0) }} className={(bedroomCount == 0) ? 'bedroomIcon selected' : 'bedroomIcon'}>
            <NoBedIcon />
          </div>
          {[1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickBedroom(elem) }} className={(bedroomCount > elem - 1) ? 'bedroomIcon selected' : 'bedroomIcon'}>
            <BedIcon />
          </div>)}
        </div>
        {/* type of property */}
        <div className='propertyTypes'>
          {[1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickPropertyType(elem) }} className={(propertyType == elem) ? 'propertyTypeIcon selected' : 'propertyTypeIcon'}>
            {(elem == 1) ? <GuestHouse /> : ''}
            {(elem == 2) ? <Apartment /> : ''}
            {(elem == 3) ? <Condo /> : ''}
            {(elem == 4) ? <House /> : ''}
            {(elem == 5) ? <Other /> : ''}
            }}
          </div>)}
        </div>
        {/* number of bathrooms */}
        <div className='bathroomCount'>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickBathroom(elem + 1) }} className={(bathroomCount > elem) ? 'bathroomIcon selected' : 'bathroomIcon'}>
            <Bathrooms />
          </div>)}
        </div>
        {/* cancellation policy */}
        <div className='cancellationPolicies'>
          {[[0, 'Flexible'], [1, '14'], [3, '30'], [4, '60']].map(elem => <div onClick={() => { setCancellationPolicy(elem[0]) }} className={(cancellationPolicy == elem[0]) ? 'cancellationPolicy selected' : 'cancellationPolicy'}>
            {elem[1]}
          </div>)}
        </div>
        <div className='cleaningFeePolicy'>
          <div className='cleaningFee'>
            <div className={(cleaningFee > 0) ? 'maidContainer selected' : 'maidContainer'}>
              <CleaningFee />
            </div>
            <input className="cleaningFeeContainer"
              type='number' min="0.00" step="0.01" max="999"
              placeholder="Cleaning Fee"
              value={cleaningFee}
              onChange={handleCleaningFee}>
            </input>
          </div>
        </div>
        <div className='securityDeposit'>
        <SecurityDeposit />
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
