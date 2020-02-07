import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './RentalEvaluationForm.css';
import axiosWithAuth from '../auth/axiosWithAuth.js';
import { useAxiosWithAuth } from '../hooks'
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
import { ReactComponent as DoorIcon } from './icons/doorway.svg';

const RentalEvaluationForm = () => {
  const [stepCount, setStepCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [propertyType, setPropertyType] = useState(1);
  const [roomType, setRoomType] = useState(0)
  const [extraGuestFee, setExtraGuestFee] = useState(0);
  const [cancellationPolicy, setCancellationPolicy] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [totalBedsCount, setTotalBedsCount] = useState(1);
  const [nightStayCount, setNightStayCount] = useState(1);
  const [cleaningFee, setCleaningFee] = useState(0);
  const [securityDeposit, setSecurityDeposit] = useState(0);
  const [predictedPrice, setPredictedPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [rentalData, setRentalData] = useState();
  const [loading, setLoading] = useState(false)
  const [price, setPrice] = useState(null)

  const handleStepIncrement = () => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', getPostableData())
    setStepCount(Math.min(10, stepCount + 1));
  }

  const handleStepDecrement = () => {
    setStepCount(Math.max(1, stepCount - 1));
  }

  const handleSubmit = (event) => {

    console.log('handleSubmitInvoked')
    event.preventDefault();
    submitProperty();
    console.log('*****************88', getPostableData());
    console.log(guestCount, propertyType, roomType, extraGuestFee, cancellationPolicy, bathroomCount, bedroomCount, totalBedsCount, nightStayCount, cleaningFee, securityDeposit, address);
  }

  const handleOnclickIcon = (newval) => {
    setGuestCount(newval);
  }
  const handleOnclickPropertyType = (newval) => {
    setPropertyType(newval);
  }
  const handleOnclickRoomType = (newval) => {
    setRoomType(newval);
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
    setTotalBedsCount(Math.min(newval, totalBedsCount));
  }
  const handleTotalBeds = (event) => {
    setTotalBedsCount(event.target.value);
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
  const handleDelete = (e) => {
    setRentalData(e.target.value);
  }


  const getPostableData = () => {
    return {
      "country": "Germany",
      "street_addr": address,
      "room_type": roomType,
      "accommodates": guestCount,
      "property_type": propertyType,
      "extra_people": extraGuestFee,
      "cancellation_policy": cancellationPolicy,
      "bathrooms": bathroomCount,
      "minimum_nights": nightStayCount,
      "cleaning_fee": cleaningFee,
      "security_deposit": securityDeposit,
      "street_addr": address,
      "bedrooms": bedroomCount,
      "beds": totalBedsCount
    }
  }
  const axios = useAxiosWithAuth()
  const submitProperty = () => {
    setLoading(true)
    axios
      .post("/listing", getPostableData())
      .then(res => {
        setPrice(Math.trunc(res.data.price * 100) / 100)
        setLoading(false)
      });
  }

  return (
  <div className="rentalContainer">
  <div className='rentalEvaluationContainer'>
    <div className='rentalInput'>
      <form >
        {/* Number of guests */}
        <div className={(stepCount === 1) ? 'guestCount wizardSection' : 'guestCount wizardSection hidden'}>
          <div className='instructions'>Select the number of guests your property can accommodate and add the fee per extra guest...</div>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickIcon(elem + 1) }} className={(guestCount > elem) ? 'guestIcon icon selected' : 'guestIcon icon'}>
            <ManIcon />
          </div>)}
        </div>
        {/* Extra guest fee */}
        <div className={(stepCount === 1) ? 'extraGuestFee wizardSection' : 'extraGuestFee wizardSection hidden'}>
          <span>Fee per extra guest:</span>
          <input className='extraGuestFee'
            type='text'
            placeholder="Extra Guest Fee"
            onChange={handleExtraGuestFee}
            value={extraGuestFee}
            disabled={(guestCount > 1) ? '' : 'disabled'}
          >
          </input>
        </div>
        {/* </div> */}
        {/* minimum nights stay */}
        <div className={(stepCount === 2) ? 'nightStayCount wizardSection' : 'nightStayCount wizardSection hidden'}>
          <div className='instructions'>Add the minimum number of nights required to rent your property...</div>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickNightStay(elem + 1) }} className={(nightStayCount > elem) ? 'nightsIcon icon selected' : 'nightsIcon icon'}>
            <MoonIcon key={elem} />
          </div>)}
          <div onClick={() => { handleOnclickNightStay(7) }} className={(nightStayCount > 6) ? 'nightsIcon icon selected' : 'nightsIcon icon'}>
            <PlusIcon />
          </div>
        </div>
        {/* number of bedrooms */}
        <div className={(stepCount === 3) ? 'bedroomCount wizardSection' : 'bedroomCount wizardSection hidden'}>
          <div className='instructions'>Add the number of bedrooms your property has, then the number of beds</div>
          <div onClick={() => { handleOnclickBedroom(0) }} className={(bedroomCount == 0) ? 'bedroomIcon selected icon' : 'bedroomIcon icon'}>
            <NoBedIcon />
          </div>

          <input className="totalBeds"
            type='text'
            placeholder="Number of Beds"
            value={totalBedsCount}
            onChange={handleTotalBeds}>
          </input>
          {[1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickBedroom(elem) }} className={(bedroomCount > elem - 1) ? 'bedroomIcon icon selected' : 'bedroomIcon icon'}>
            <BedIcon />
          </div>)}
        </div>
        {/* type of property */}
        <div className={(stepCount === 4) ? 'propertyTypes wizardSection' : 'propertyTypes wizardSection hidden'}>
          <div className='instructions'>What kind of Property will the guest be renting and what Level of Privacy does the renter enjoy?</div>
          {[1, 2, 3, 4, 5].map(elem => <div
            onClick={() => { handleOnclickPropertyType(elem) }}
            className={(propertyType == elem) ? 'propertyTypeIcon icon selected' : 'propertyTypeIcon icon'}>
            {(elem === 1) ? <GuestHouse /> : ''}
            {(elem === 2) ? <Apartment /> : ''}
            {(elem === 3) ? <Condo /> : ''}
            {(elem === 4) ? <House /> : ''}
            {(elem === 5) ? <Other /> : ''}
          </div>
          )}
          <div className={(stepCount === 4) ? 'roomType' : 'roomTypes hidden'}>
            {[0, 1, 2].map(elem => <div
              onClick={() => { handleOnclickRoomType(elem) }}
              className={(roomType == elem) ? 'roomTypeIcon icon selected' : 'roomTypeIcon icon'}>
              {(elem === 0) ? <DoorIcon /> : ''}
              {(elem === 1) ? <GuestHouse /> : ''}
              {(elem === 2) ? <Other /> : ''}
            </div>)}
          </div>
        </div>
        {/* number of bathrooms */}
        <div className={(stepCount === 5) ? 'bathroomCount wizardSection' : 'bathroomCount wizardSection hidden'}>
          <div className='instructions'>Add the number of bathrooms your property has...</div>
          {[0, 1, 2, 3, 4, 5].map(elem => <div onClick={() => { handleOnclickBathroom(elem + 1) }} className={(bathroomCount > elem) ? 'bathroomIcon icon selected' : 'bathroomIcon icon'}>
            <Bathrooms />
          </div>)}
        </div>
        {/* cancellation policy */}
        <div className={(stepCount === 6) ? 'cancellationPolicies wizardSection' : 'cancellationPolicies wizardSection hidden'}>
          <div className='instructions'>What is your cancellation policy?  Select your cancellation policy below.</div>
          {[[0, 'Flexible'], [1, '14'], [3, '30'], [4, '60']].map(elem => <div onClick={() => { setCancellationPolicy(elem[0]) }} className={(cancellationPolicy == elem[0]) ? 'cancellationPolicy selected' : 'cancellationPolicy'}>
            {elem[1]}
          </div>)}
        </div>
        {/* cleaning fee */}
        <div className={(stepCount === 7) ? 'cleaningFeePolicy wizardSection' : 'cleaningFeePolicy wizardSection hidden'}>
          <div className='instructions'>Do you charge a fee for cleaning? Add how much your charge below...</div>
          <div className='cleaningFee'>
            <div className={(cleaningFee > 0) ? 'maidContainer icon selected' : 'maidContainer icon'}>
              <CleaningFee />
            </div>
            <input className="cleaningFeeContainer"
              type='text' 
              placeholder="Cleaning Fee"
              value={cleaningFee}
              onChange={handleCleaningFee}>
            </input>
          </div>
        </div>
        {/* security deposit */}
        <div className={(stepCount === 8) ? 'securityDepositContainer wizardSection' : 'securityDepositContainer wizardSection hidden'}>
          <div className='instructions'>Does your property require a security deposit?  Add that number below...</div>
          <div className='securityDepositIcon icon'>
            <SecurityDeposit />
          </div>
          <input className="securityDeposit"
            type='text'
            placeholder="Security Deposit"
            value={securityDeposit}
            onChange={handleSecurityDeposit}>
          </input>
        </div>
        <div className={(stepCount === 9) ? 'streetAddressContainer wizardSection' : 'streetAddressContainer wizardSection hidden'}>
          <div className='instructions'>What is the address of your property?</div>
          <div className='addressIcon'>
            {/* <AddressIcon /> */}
          </div>
          <input className='streetAddress'
            type='textarea'
            placeholder='Street Address'
            value={address}
            onChange={handleAddressChange}>
          </input>
        </div>
      </form>
      <div className='wizardNav'>

        <button className={stepCount === 10 ? 'hidden' : "navButton"} disabled={(stepCount === 1) ? "disabled" : ""} onClick={() => { handleStepDecrement() }} >Previous</button>
        <button className={stepCount === 10 ? 'hidden' : "navButton"} disabled={(stepCount === 10) ? "disabled" : ""} onClick={() => { handleStepIncrement() }} >Next</button>

        <button className={stepCount === 10 ? 'submitButton' : 'hidden'}
          onClick={handleSubmit} >
          Submit
        </button >
        {loading ? <div className="loader">LOADING</div> : null}
        {price ? <div className="price">{price}</div> : null}
      </div>
    </div>

  </div>
  </div>
  )
}

export default RentalEvaluationForm;

