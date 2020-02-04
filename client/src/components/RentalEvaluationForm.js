import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import './RentalEvaluationForm.css';


const RentalEvaluationForm = () => {
    const [guestCount, setGuestCount] = useState(1);
    const [propertyType, setPropertyType] = useState(1);
    const [extraGuestFee, setExtraGuestFee] = useState(0);
    const [cancellationPolicy, setCancellationPolicy] = useState(0);
    const [bathroomCount, setBathroomCount] = useState(1);
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
        setGuestCount(bathroomIcon);
    }
   
    return <div className='rentalEvaluationContainer'>
        <h1>Rental Evaluation Form</h1>
        <div className='rentalInput'>
            <form>
                <div className='guestCount'>
                    <div onClick={() => { handleOnclickIcon(1) }} className={(guestCount > 0) ? 'guestIcon selected' : 'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(2) }} className={(guestCount > 1) ? 'guestIcon selected' : 'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(3) }} className={(guestCount > 2) ? 'guestIcon selected' : 'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(4) }} className={(guestCount > 3) ? 'guestIcon selected' : 'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(5) }} className={(guestCount > 4) ? 'guestIcon selected' : 'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(6) }} className={(guestCount > 5) ? 'guestIcon selected' : 'guestIcon'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><circle cx="26.7" cy="4.5" r="4.5" class="a" /><path d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z" class="a" /></svg>
                    </div>
                </div>
                <div className='extraGuestFee'>
                    <span>Fee per extra guest:</span>
                    <input 
                    type='number'
                    placeholder="Extra Guest Fee"
                    onChange={handleExtraGuestFee}
                    // value={extraGuestFee}
                    disabled={(guestCount > 1)?'':'disabled'}
                    >
                    </input>
                </div>
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
                <div className='bathroomCount'>
                    <div onClick={() => { handleOnclickIcon(1) }} className={(bathroomCount > 0) ? 'bathroomIcon selected' : 'bathroomIcon'}>
                    <svg viewBox="0 0 55 56" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="015---Toilet" fill="rgb(0,0,0)" fill-rule="nonzero"><path id="Shape" d="m21 2c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-20c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1z"/><path id="Shape" d="m19 27v-23h-16v21c.00330612 2.7600532 2.23994685 4.9966939 5 5h11zm-12-4c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1s1 .4477153 1 1zm0-14c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1z"/><path id="Shape" d="m54 28h-33v2h33c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"/><path id="Shape" d="m11 32v24h16v-5c.0033061-2.7600532 2.2399468-4.9966939 5-5h8c6.0721626-.0071635 10.9928365-4.9278374 11-11v-3z"/></g></g></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(2) }} className={(bathroomCount > 1) ? 'bathroomIcon selected' : 'bathroomIcon'}>
                    <svg viewBox="0 0 55 56" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="015---Toilet" fill="rgb(0,0,0)" fill-rule="nonzero"><path id="Shape" d="m21 2c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-20c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1z"/><path id="Shape" d="m19 27v-23h-16v21c.00330612 2.7600532 2.23994685 4.9966939 5 5h11zm-12-4c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1s1 .4477153 1 1zm0-14c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1z"/><path id="Shape" d="m54 28h-33v2h33c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"/><path id="Shape" d="m11 32v24h16v-5c.0033061-2.7600532 2.2399468-4.9966939 5-5h8c6.0721626-.0071635 10.9928365-4.9278374 11-11v-3z"/></g></g></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(3) }} className={(bathroomCount > 2) ? 'bathroomIcon selected' : 'bathroomIcon'}>
                    <svg viewBox="0 0 55 56" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="015---Toilet" fill="rgb(0,0,0)" fill-rule="nonzero"><path id="Shape" d="m21 2c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-20c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1z"/><path id="Shape" d="m19 27v-23h-16v21c.00330612 2.7600532 2.23994685 4.9966939 5 5h11zm-12-4c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1s1 .4477153 1 1zm0-14c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1z"/><path id="Shape" d="m54 28h-33v2h33c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"/><path id="Shape" d="m11 32v24h16v-5c.0033061-2.7600532 2.2399468-4.9966939 5-5h8c6.0721626-.0071635 10.9928365-4.9278374 11-11v-3z"/></g></g></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(4) }} className={(bathroomCount > 3) ? 'bathroomIcon selected' : 'bathroomIcon'}>
                    <svg viewBox="0 0 55 56" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="015---Toilet" fill="rgb(0,0,0)" fill-rule="nonzero"><path id="Shape" d="m21 2c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-20c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1z"/><path id="Shape" d="m19 27v-23h-16v21c.00330612 2.7600532 2.23994685 4.9966939 5 5h11zm-12-4c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1s1 .4477153 1 1zm0-14c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1z"/><path id="Shape" d="m54 28h-33v2h33c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"/><path id="Shape" d="m11 32v24h16v-5c.0033061-2.7600532 2.2399468-4.9966939 5-5h8c6.0721626-.0071635 10.9928365-4.9278374 11-11v-3z"/></g></g></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(5) }} className={(bathroomCount > 4) ? 'bathroomIcon selected' : 'bathroomIcon'}>
                    <svg viewBox="0 0 55 56" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="015---Toilet" fill="rgb(0,0,0)" fill-rule="nonzero"><path id="Shape" d="m21 2c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-20c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1z"/><path id="Shape" d="m19 27v-23h-16v21c.00330612 2.7600532 2.23994685 4.9966939 5 5h11zm-12-4c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1s1 .4477153 1 1zm0-14c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1z"/><path id="Shape" d="m54 28h-33v2h33c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"/><path id="Shape" d="m11 32v24h16v-5c.0033061-2.7600532 2.2399468-4.9966939 5-5h8c6.0721626-.0071635 10.9928365-4.9278374 11-11v-3z"/></g></g></svg>
                    </div>
                    <div onClick={() => { handleOnclickIcon(6) }} className={(bathroomCount > 5) ? 'bathroomIcon selected' : 'bathroomIcon'}>
                    <svg viewBox="0 0 55 56" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="015---Toilet" fill="rgb(0,0,0)" fill-rule="nonzero"><path id="Shape" d="m21 2c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-20c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1z"/><path id="Shape" d="m19 27v-23h-16v21c.00330612 2.7600532 2.23994685 4.9966939 5 5h11zm-12-4c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1s1 .4477153 1 1zm0-14c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1z"/><path id="Shape" d="m54 28h-33v2h33c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"/><path id="Shape" d="m11 32v24h16v-5c.0033061-2.7600532 2.2399468-4.9966939 5-5h8c6.0721626-.0071635 10.9928365-4.9278374 11-11v-3z"/></g></g></svg>
                    </div>
                </div>
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
