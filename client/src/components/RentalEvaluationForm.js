import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RentalEvaluationForm.css';
import axiosWithAuth from '../auth/axiosWithAuth.js';
import RentalPrediction from './RentalPrediction';
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
  const [stepCount, setStepCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [propertyType, setPropertyType] = useState(1);
  const [extraGuestFee, setExtraGuestFee] = useState(0);
  const [cancellationPolicy, setCancellationPolicy] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [nightStayCount, setNightStayCount] = useState(1);
  const [cleaningFee, setCleaningFee] = useState(0);
  const [securityDeposit, setSecurityDeposit] = useState(0);
  const [predictedPrice, setPredictedPrice] = useState(0);
  const [address, setAddress] = useState();

  const handleStepIncrement = () => {
    setStepCount(Math.min(8, stepCount + 1));
    if (stepCount == 8) {
      submitProperty();
    }
  }
  const handleStepDecrement = () => {
    setStepCount(Math.max(1, stepCount - 1));
  }  
  const handleSubmit = (event) => {
    event.preventDefault();
  }  
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
  const handleSecurityDeposit = (e) => {
    setSecurityDeposit(e.target.value);
  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }
  const getPostableData = () => {
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
    return {
      "country": "Germany",
      "accomodates": guestCount,
      "property_type": propertyType,
      "extra_people": extraGuestFee,
      "cancellation_policy": cancellationPolicy,
      "bathrooms": bathroomCount,
      "minimum_nights": nightStayCount,
      "cleaning_fee": cleaningFee,
      "security_deposit": securityDeposit,
      "street_addr": address,
      "bedrooms": bedroomCount
    }
  }
  const submitProperty = () => {
    axiosWithAuth()
    .post("/listing", getPostableData())
    .then(res => console.log( res ));
  }

  return <div className='rentalEvaluationContainer'>
    <h1>Rental Evaluation Form</h1>
    <div className='rentalInput'>
      <form onSubmit={handleSubmit} >
        {/* Number of guests */}
        <div>GuestCount: {guestCount}</div>
        <div className={(stepCount == 1) ? 'guestCount' : 'guestCount hidden'}>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickIcon(elem + 1) }} className={(guestCount > elem) ? 'guestIcon icon selected' : 'guestIcon icon'}>
            <ManIcon />
          </div>)}
        </div>
        {/* Extra guest fee */}
        <div className={(stepCount == 1) ? 'extraGuestFee' : 'extraGuestFee hidden'}>
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
        <div className={(stepCount == 2) ? 'nightStayCount' : 'nightStayCount hidden'}>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickNightStay(elem + 1) }} className={(nightStayCount > elem) ? 'nightsIcon icon selected' : 'nightsIcon icon'}>
            <MoonIcon />
          </div>)}
          <div onClick={() => { handleOnclickNightStay(7) }} className={(nightStayCount > 6) ? 'nightsIcon icon selected' : 'nightsIcon icon'}>
            <PlusIcon />
          </div>
        </div>
        {/* number of bedrooms */}
        <div className={(stepCount == 3) ? 'bedroomCount' : 'bedroomCount hidden'}>
          <div onClick={() => { handleOnclickBedroom(0) }} className={(bedroomCount == 0) ? 'bedroomIcon selected icon' : 'bedroomIcon icon'}>
            <NoBedIcon />
          </div>
          {[1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickBedroom(elem) }} className={(bedroomCount > elem - 1) ? 'bedroomIcon icon selected' : 'bedroomIcon icon'}>
            <BedIcon />
          </div>)}
        </div>
        {/* type of property */}
        <div className={(stepCount == 4) ? 'propertyTypes' : 'propertyTypes hidden'}>
          {[1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickPropertyType(elem) }} className={(propertyType == elem) ? 'propertyTypeIcon icon selected' : 'propertyTypeIcon icon'}>
            {(elem == 1) ? <GuestHouse /> : ''}
            {(elem == 2) ? <Apartment /> : ''}
            {(elem == 3) ? <Condo /> : ''}
            {(elem == 4) ? <House /> : ''}
            {(elem == 5) ? <Other /> : ''}
            }}
          </div>)}
        </div>
        {/* number of bathrooms */}
        <div className={(stepCount == 5) ? 'bathroomCount' : 'bathroomCount hidden'}>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickBathroom(elem + 1) }} className={(bathroomCount > elem) ? 'bathroomIcon icon selected' : 'bathroomIcon icon'}>
            <Bathrooms />
          </div>)}
        </div>
        {/* cancellation policy */}
        <div className={(stepCount == 6) ? 'cancellationPolicies' : 'cancellationPolicies hidden'}>
          {[[0, 'Flexible'], [1, '14'], [3, '30'], [4, '60']].map(elem => <div onClick={() => { setCancellationPolicy(elem[0]) }} className={(cancellationPolicy == elem[0]) ? 'cancellationPolicy selected' : 'cancellationPolicy'}>
            {elem[1]}
          </div>)}
        </div>
        {/* cleaning fee */}
        <div className={(stepCount == 7) ? 'cleaningFeePolicy' : 'cleaningFeePolicy hidden'}>
          <div className='cleaningFee'>
            <div className={(cleaningFee > 0) ? 'maidContainer icon selected' : 'maidContainer icon'}>
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
        {/* security deposit */}
        <div className={(stepCount == 8) ? 'securityDepositContainer' : 'securityDepositContainer hidden'}>
          <div className='securityDepositIcon icon'>
              <SecurityDeposit />
          </div>
          <input className="securityDeposit"
            type='number' min="0.00" step="0.01" max="2500"
            placeholder="Security Deposit"
            value={securityDeposit}
            onChange={handleSecurityDeposit}>
          </input>
        </div>
        <button onClick={() => { handleStepIncrement() }} >Next</button>     
        <button onClick={() => { handleStepDecrement() }} >Previous</button>
      </form>
    </div>
    <div className='rentalPrediction'>
      <RentalPrediction predictedPrice={predictedPrice} />
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
