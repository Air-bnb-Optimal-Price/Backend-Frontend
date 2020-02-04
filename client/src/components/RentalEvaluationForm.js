import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import './RentalEvaluationForm.css';


const RentalEvaluationForm = () => {
  const [guestCount, setGuestCount] = useState(1);
  const [propertyType, setPropertyType] = useState(1);
  const [extraGuestFee, setExtraGuestFee] = useState(0);
  const [cancellationPolicy, setCancellationPolicy] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [nightStayCount, setNightStayCount] = useState(1);

  const handleOnclickIcon = (icon) => {
    setGuestCount(icon);
  }
  const handleOnclickPropertyType = (pt) => {
    setPropertyType(pt);
  }
  const handleExtraGuestFee = (fee) => {
    setExtraGuestFee(fee);
  }
  const handleCancellationPolicy = (policyid) => {
    setCancellationPolicy(policyid);
  }
  const handleOnclickBathroom = (bathroomIcon) => {
    setBathroomCount(bathroomIcon);
  }
  const handleOnclickBedroom = (bedroomIcon) => {
    setBedroomCount(bedroomIcon);
  }
  const handleOnclickNightStay = (nightsIcon) => {
    setNightStayCount(nightsIcon);
  }

  return <div className='rentalEvaluationContainer'>
    <h1>Rental Evaluation Form</h1>
    <div className='rentalInput'>
      <form>
{/* Number of guests */}
        <div className='guestCount'>
          {[0,1,2,3,4,5].map(elem => <div onClick={() => { handleOnclickIcon(elem + 1) }} className={(guestCount > elem) ? 'guestIcon selected' : 'guestIcon'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
          </div>)}
        </div>
{/* Extra guest fee */}
        <div className='extraGuestFee'>
          <span>Fee per extra guest:</span>
          <input
            type='number'
            placeholder="Extra Guest Fee"
            onChange={handleExtraGuestFee}
            // value={extraGuestFee}
            disabled={(guestCount > 1) ? '' : 'disabled'}
          >
          </input>
        </div>
{/* minimum nights stay */}
        <div className='nightStayCount'>
          {[0,1,2,3,4,5].map(elem => <div onClick={() => { handleOnclickNightStay(elem + 1) }} className={(nightStayCount > elem) ? 'nightsIcon selected' : 'nightsIcon'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.2 383.2"><path d="M226.7 124.1c-1.7-1.4-3.9-2.1-6.2-1.9h-33.8l31.6-35.3 3-3.3 1.9-2.3c0.5-0.7 1-1.5 1.3-2.4 0.4-0.9 0.6-1.9 0.6-2.9 0.2-2.3-0.9-4.6-3-5.8 -2.6-1.2-5.5-1.8-8.4-1.6h-39.7c-2.1-0.1-4.2 0.5-5.8 1.8 -1.4 1.2-2.1 2.9-2.1 4.7 0 2.7 0.9 4.3 2.7 5 2.6 0.7 5.3 1.1 8 1h25.6c-1.1 1.5-2.5 3.3-4.2 5.3l-6.6 7.5 -8.6 9.6 -10.3 11.4c-3.6 4-5.9 6.7-7 8 -2.5 3.1-2.2 7.6 0.7 10.3 2.1 1.7 4.8 2.6 7.5 2.4h46.7c2.2 0.2 4.5-0.5 6.2-1.8 1.4-1.2 2.1-2.9 2.1-4.7C228.9 127.1 228.1 125.3 226.7 124.1z" /><path d="M297.3 164.3c-1.4-1.1-3.2-1.7-5-1.5h-26.9l25.2-28.2 2.4-2.6 1.5-1.8c0.4-0.6 0.8-1.2 1-1.9 0.3-0.7 0.5-1.5 0.5-2.3 0.2-1.9-0.7-3.7-2.3-4.6 -2.1-1-4.4-1.4-6.7-1.3h-31.4c-1.7-0.1-3.3 0.4-4.6 1.4 -1.1 0.9-1.7 2.3-1.7 3.8 0 2.2 0.7 3.4 2.2 4 2.1 0.6 4.2 0.9 6.4 0.8h20.2c-0.9 1.2-2 2.6-3.4 4.2l-5.3 6 -6.9 8 -8 9.1c-2.9 3.2-4.8 5.4-5.7 6.6 -1.9 2.4-1.6 5.9 0.6 8 1.7 1.2 3.7 1.7 5.7 1.5h37.3c1.8 0.1 3.5-0.4 5-1.4 1.1-1 1.6-2.3 1.6-3.8C299 166.7 298.4 165.3 297.3 164.3z" /><path d="M381.1 119.6c-1.7-1.4-3.9-2.1-6.2-1.9h-33.8l31.6-35.3 2.9-3.6 1.9-2.3c0.5-0.7 1-1.5 1.3-2.4 0.4-0.9 0.6-1.9 0.6-2.9 0.2-2.3-0.9-4.6-3-5.8 -2.7-1.3-5.8-2-8.8-1.8h-39.2c-2.1-0.1-4.2 0.5-5.8 1.8 -1.4 1.2-2.1 2.9-2.1 4.7 0 2.7 0.9 4.3 2.7 5 2.6 0.7 5.3 1.1 8 1h25.6c-1.1 1.5-2.5 3.3-4.2 5.3l-6.6 7.5 -8.6 9.6 -10.3 11.4c-3.6 4-5.9 6.7-7 8 -1 1.3-1.6 2.8-1.7 4.5 -0.1 2.2 0.8 4.3 2.4 5.8 2.1 1.6 4.7 2.4 7.4 2.2h46.7c2.2 0.2 4.5-0.5 6.2-1.8 1.4-1.2 2.1-2.9 2.1-4.7C383 122.1 382.3 120.7 381.1 119.6z" /><path d="M351.1 252.5c-2-1-4.4-1-6.5-0.1h0.1c-86.7 35.9-186.1-5.4-222-92.1 -18.2-44-17.1-93.6 3-136.7 1.9-4 0.2-8.8-3.8-10.7 -2-1-4.4-1-6.5-0.1C20.4 51.8-25 160.5 14 255.6c39 95.1 147.8 140.5 242.8 101.4 43.4-17.8 78.4-51.3 98.1-93.8C356.8 259.2 355.1 254.4 351.1 252.5z" /></svg>
          </div>)}
          <div onClick={() => { handleOnclickNightStay(7) }} className={(nightStayCount > 6) ? 'nightsIcon selected' : 'nightsIcon'}>
          <svg viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
          </div>
        </div>
{/* number of bedrooms */}
        <div className='bedroomCount'>
          <div onClick={() => { handleOnclickBedroom(0) }} className={(bedroomCount == 0 ) ? 'bedroomIcon selected' : 'bedroomIcon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M436.3 75.7C388 27.4 324.1 0 256 0 115.3 0 0 115.1 0 256c0 141 115.1 256 256 256 140.3 0 256-114.6 256-256C512 187.9 484.6 124 436.3 75.7zM256 451c-107.8 0-195-87-195-195 0-42 13.2-81.9 37.5-114.9l272.4 272.1C337.9 437.8 298 451 256 451zM413.2 370.9L141.1 98.5C174.1 74.2 214 61 256 61c107.8 0 195 87 195 195C451 298 437.8 337.9 413.2 370.9z"/></svg>
          </div>
        {[1,2,3,4,5].map(elem => <div onClick={() => { handleOnclickBedroom(elem) }} className={(bedroomCount > elem - 1) ? 'bedroomIcon selected' : 'bedroomIcon'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M27.8 299.1c0.2 0 4-0.4 4.2-0.5l449.7 0.2c0.2 0 2.4 0.3 2.6 0.3 0.3 0 0.6 0 0.8 0 0.1 0 0.3 0 0.4 0 5.9 0 10.7-4.8 10.7-10.7 0-2.2-0.6-4.1-1.7-5.8l-25.1-81.6V74.7c0-29.4-23.9-53.3-53.3-53.3H96c-29.4 0-53.3 23.9-53.3 53.3v126.4l-25.9 84.3c-1 3.4-0.4 7.1 1.9 9.8C20.8 297.9 24.2 299.4 27.8 299.1zM74.7 192h18.3l9.9-39.8C106.5 138 119.3 128 134 128h68.7c17.6 0 32 14.4 32 32v32h42.7v-32c0-17.6 14.4-32 32-32h68.7c14.7 0 27.5 10 31.1 24.2L419 192h18.3c5.9 0 10.7 4.8 10.7 10.7s-4.8 10.7-10.7 10.7h-18.7c-1.1 3.2-2.6 6.3-4.8 9 -6.1 7.8-15.3 12.3-25.2 12.3h-79.3c-13.9 0-25.6-8.9-30-21.3h-46.6c-4.4 12.4-16.1 21.3-30 21.3h-79.3c-9.9 0-19.1-4.5-25.2-12.3 -2.2-2.8-3.6-5.8-4.8-9H74.7c-5.9 0-10.7-4.8-10.7-10.7S68.8 192 74.7 192z" /><path d="M480 320H32c-17.6 0-32 14.4-32 32v128c0 5.9 4.8 10.7 10.7 10.7h42.7C59.2 490.7 64 485.9 64 480v-32h384v32c0 5.9 4.8 10.7 10.7 10.7h42.7c5.9 0 10.7-4.8 10.7-10.7V352C512 334.4 497.6 320 480 320z" /></svg>
          </div>)}
        </div>
{/* type of property */}
        <div className='propertyTypes'>
          <div onClick={() => { handleOnclickPropertyType(1) }} className={(propertyType == 1) ? 'propertyTypeIcon selected' : 'propertyTypeIcon'}>
            <svg id="Capa_1" enable-background="new 0 0 524.235 524.235" viewBox="0 0 524.235 524.235" xmlns="http://www.w3.org/2000/svg"><path d="m458.706 196.588v-131.059h-65.529v65.529l-131.059-131.058-262.118 262.118h65.529v262.118h393.176v-262.122l65.529.004c.001 0-65.528-65.53-65.528-65.53zm-131.059 294.883h-131.059v-196.589h131.059z" /></svg>
          </div>
          <div onClick={() => { handleOnclickPropertyType(2) }} className={(propertyType == 2) ? 'propertyTypeIcon selected' : 'propertyTypeIcon'}>
            <svg viewBox="-21 -21 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><path d="m621.25 602.5h-6.011719v-350.238281h6.011719c10.351562 0 18.75-8.398438 18.75-18.75 0-10.363281-8.796875-19.136719-19.148438-19.136719h-207.039062v388.125h-37.5v-565h7.238281c10.351563 0 18.75-8.398438 18.75-18.75s-8.398437-18.75-18.75-18.75h-364.800781c-10.351562 0-18.75 8.398438-18.75 18.75s8.398438 18.75 18.75 18.75h7.5625v565h-7.5625c-10.351562 0-18.75 8.398438-18.75 18.75s8.398438 18.75 18.75 18.75h602.5c10.351562 0 18.75-8.398438 18.75-18.75s-8.398438-18.75-18.75-18.75zm-479.015625 0h-37.5v-81.988281c0-10.359375 8.390625-18.75 18.75-18.75 10.351563 0 18.75 8.390625 18.75 18.75zm0-156.4375c0 10.347656-8.398437 18.75-18.75 18.75-10.359375 0-18.75-8.402344-18.75-18.75v-31.535156c0-10.367188 8.390625-18.75 18.75-18.75 10.351563 0 18.75 8.382812 18.75 18.75zm.167969-106.847656c0 10.359375-8.402344 18.75-18.75 18.75-10.367188 0-18.75-8.390625-18.75-18.75v-31.539063c0-10.351562 8.382812-18.75 18.75-18.75 10.347656 0 18.75 8.398438 18.75 18.75zm0-106.089844c0 10.351562-8.402344 18.75-18.75 18.75-10.367188 0-18.75-8.398438-18.75-18.75v-31.539062c0-10.359376 8.382812-18.75 18.75-18.75 10.347656 0 18.75 8.390624 18.75 18.75zm.160156-106.851562c0 10.351562-8.402344 18.75-18.75 18.75-10.351562 0-18.75-8.398438-18.75-18.75v-31.539063c0-10.359375 8.398438-18.75 18.75-18.75 10.347656 0 18.75 8.390625 18.75 18.75zm77.171875 476.226562h-37.5v-81.988281c0-10.359375 8.390625-18.75 18.75-18.75 10.351563 0 18.75 8.390625 18.75 18.75zm0-156.4375c0 10.347656-8.398437 18.75-18.75 18.75-10.359375 0-18.75-8.402344-18.75-18.75v-31.535156c0-10.367188 8.390625-18.75 18.75-18.75 10.351563 0 18.75 8.382812 18.75 18.75zm.167969-106.847656c0 10.359375-8.402344 18.75-18.75 18.75-10.367188 0-18.75-8.390625-18.75-18.75v-31.539063c0-10.351562 8.382812-18.75 18.75-18.75 10.347656 0 18.75 8.398438 18.75 18.75zm0-106.089844c0 10.351562-8.402344 18.75-18.75 18.75-10.367188 0-18.75-8.398438-18.75-18.75v-31.539062c0-10.359376 8.382812-18.75 18.75-18.75 10.347656 0 18.75 8.390624 18.75 18.75zm.160156-106.851562c0 10.351562-8.402344 18.75-18.75 18.75-10.351562 0-18.75-8.398438-18.75-18.75v-31.539063c0-10.359375 8.398438-18.75 18.75-18.75 10.347656 0 18.75 8.390625 18.75 18.75zm77.171875 476.226562h-37.5v-81.988281c0-10.359375 8.390625-18.75 18.75-18.75 10.351563 0 18.75 8.390625 18.75 18.75zm0-156.4375c0 10.347656-8.398437 18.75-18.75 18.75-10.359375 0-18.75-8.402344-18.75-18.75v-31.535156c0-10.367188 8.390625-18.75 18.75-18.75 10.351563 0 18.75 8.382812 18.75 18.75zm.167969-106.847656c0 10.359375-8.402344 18.75-18.75 18.75-10.367188 0-18.75-8.390625-18.75-18.75v-31.539063c0-10.351562 8.382812-18.75 18.75-18.75 10.347656 0 18.75 8.398438 18.75 18.75zm0-106.089844c0 10.351562-8.402344 18.75-18.75 18.75-10.367188 0-18.75-8.398438-18.75-18.75v-31.539062c0-10.359376 8.382812-18.75 18.75-18.75 10.347656 0 18.75 8.390624 18.75 18.75zm.160156-106.851562c0 10.351562-8.402344 18.75-18.75 18.75-10.351562 0-18.75-8.398438-18.75-18.75v-31.539063c0-10.359375 8.398438-18.75 18.75-18.75 10.347656 0 18.75 8.390625 18.75 18.75zm159.386719 288.253906c0-10.367188 8.386719-18.75 18.75-18.75 10.351562 0 18.75 8.382812 18.75 18.75v31.535156c0 10.347656-8.398438 18.75-18.75 18.75-10.363281 0-18.75-8.402344-18.75-18.75zm37.578125 187.972656h-37.5v-74.085938c0-10.363281 8.398437-18.75 18.75-18.75 10.359375 0 18.75 8.386719 18.75 18.75zm.085937-263.285156c0 10.359375-8.402343 18.75-18.75 18.75-10.363281 0-18.75-8.390625-18.75-18.75v-31.539063c0-10.351562 8.386719-18.75 18.75-18.75 10.347657 0 18.75 8.398438 18.75 18.75zm39.835938 75.3125c0-10.367188 8.386719-18.75 18.75-18.75 10.351562 0 18.75 8.382812 18.75 18.75v31.535156c0 10.347656-8.398438 18.75-18.75 18.75-10.363281 0-18.75-8.402344-18.75-18.75zm37.578125 187.972656h-37.5v-74.085938c0-10.363281 8.398437-18.75 18.75-18.75 10.359375 0 18.75 8.386719 18.75 18.75zm.085937-263.285156c0 10.359375-8.402343 18.75-18.75 18.75-10.363281 0-18.75-8.390625-18.75-18.75v-31.539063c0-10.351562 8.386719-18.75 18.75-18.75 10.347657 0 18.75 8.398438 18.75 18.75zm0 0" /></svg>
          </div>
          <div onClick={() => { handleOnclickPropertyType(3) }} className={(propertyType == 3) ? 'propertyTypeIcon selected' : 'propertyTypeIcon'}>
            <svg id="Capa_1" enable-background="new 0 0 524.235 524.235" viewBox="0 0 524.235 524.235" xmlns="http://www.w3.org/2000/svg"><path d="m524.235 163.824v-65.53l-262.117-98.294-262.118 98.294v65.529h32.765v327.647h-32.765v32.765h524.235v-32.765h-32.765v-327.646zm-229.353 0h98.294v98.294h-98.294zm-163.823 0h98.294v98.294h-98.294zm0 163.823h98.294v98.294h-98.294zm163.823 163.824v-163.824h98.294v163.824z" /></svg>
          </div>
          <div onClick={() => { handleOnclickPropertyType(4) }} className={(propertyType == 4) ? 'propertyTypeIcon selected' : 'propertyTypeIcon'}>
            <svg id="Capa_1" enable-background="new 0 0 524.235 524.235" viewBox="0 0 524.235 524.235" xmlns="http://www.w3.org/2000/svg"><path d="m524.235 163.824v-65.53l-262.117-98.294-262.118 98.294v65.529h32.765v327.647h-32.765v32.765h524.235v-32.765h-32.765v-327.646zm-229.353 0h98.294v98.294h-98.294zm-163.823 0h98.294v98.294h-98.294zm0 163.823h98.294v98.294h-98.294zm163.823 163.824v-163.824h98.294v163.824z" /></svg>
          </div>
          <div onClick={() => { handleOnclickPropertyType(5) }} className={(propertyType == 5) ? 'propertyTypeIcon selected' : 'propertyTypeIcon'}>
            <svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><circle cx="256" cy="452" r="60" /><path d="m256 0c-86.019 0-156 69.981-156 156v15h120v-15c0-19.851 16.149-36 36-36s36 16.149 36 36c0 10.578-4.643 20.59-12.74 27.471l-83.26 70.787v107.742h120v-52.258l40.976-34.837c34.968-29.714 55.024-73.052 55.024-118.905 0-86.019-69.981-156-156-156z" /></g></svg>
          </div>
        </div>
{/* number of bathrooms */}
        <div className='bathroomCount'>
          {[0,1,2,3,4,5].map(elem => <div onClick={() => { handleOnclickBathroom(elem + 1) }} className={(bathroomCount > elem) ? 'bathroomIcon selected' : 'bathroomIcon'}>
            <svg viewBox="0 0 55 56" xmlns="http://www.w3.org/2000/svg"><g><g><path id="Shape" d="m21 2c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-20c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1z" /><path id="Shape" d="m19 27v-23h-16v21c.00330612 2.7600532 2.23994685 4.9966939 5 5h11zm-12-4c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1s1 .4477153 1 1zm0-14c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1z" /><path id="Shape" d="m54 28h-33v2h33c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z" /><path id="Shape" d="m11 32v24h16v-5c.0033061-2.7600532 2.2399468-4.9966939 5-5h8c6.0721626-.0071635 10.9928365-4.9278374 11-11v-3z" /></g></g></svg>
          </div>)}
        </div>
{/* cancellation policy */}
        <div className='cancellationPolicies'>
          <div onClick={() => { setCancellationPolicy(0) }} className={(cancellationPolicy == 0) ? 'cancellationPolicy selected' : 'cancellationPolicy'}>
            Flexible
                    </div>
          <div onClick={() => { setCancellationPolicy(1) }} className={(cancellationPolicy == 1) ? 'cancellationPolicy selected' : 'cancellationPolicy'}>
            14
                    </div>
          <div onClick={() => { setCancellationPolicy(3) }} className={(cancellationPolicy == 3) ? 'cancellationPolicy selected' : 'cancellationPolicy'}>
            30
                    </div>
          <div onClick={() => { setCancellationPolicy(4) }} className={(cancellationPolicy == 4) ? 'cancellationPolicy selected' : 'cancellationPolicy'}>
            60
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
