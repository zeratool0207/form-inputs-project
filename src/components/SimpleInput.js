import React, { useState, useEffect } from 'react';

const SimpleInput = (props) => {

  // useState
  const [ enteredName, setEnteredName ] = useState('');
  const [ enteredNameTouched, setEnteredNameTouched ] = useState(false);
  //const [ formIsValid, setFormIsValid ]= useState(false);

  // useEffect( () => {
    //   if ( enteredNameIsValid ) {
    //     setFormIsValid(true);
    //   } else {
    //     setFormIsValid(false);
    //   }
    // },[enteredNameIsValid]);

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  } 

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid 
    ? 'form-control invalid'
    : 'form-control' ;

  const nameInputHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    console.log(enteredName);

    if ( !enteredNameIsValid ) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
  }

  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          onBlur={nameInputBlurHandler}
          type='text' 
          id='name' 
          onChange={nameInputHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
