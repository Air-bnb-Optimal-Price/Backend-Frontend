import React from 'react';
// import { useForm } from 'react-hook-form';
import './RentalEvaluationForm.css';

const rentalEvaluationForm = () => {
    // const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
    };

    return <div className='rentalEvaluationContainer'>
        <h1>Rental Evaluation Form</h1>
        <div className='rentalInput'>
            <form>
                <input name="email" />

                <input name="username" />
  
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className='rentalPrediction'>
            Output
        </div>
    </div>
}

export default rentalEvaluationForm;
