import React, { useRef, useState, useEffect } from 'react';

const SimpleInput = (props) => {

  // useRef
  const nameInputRef = useRef();

  // useState
  const [ enteredName, setEnteredName ] = useState('');
  const [ enteredNamsIsValid, setEnteredNameIsValid ] = useState(false);
  const [ enteredNameTouched, setEnteredNameTouched ] = useState(false);
  
  // useEffect
  useEffect( () => {
    if (enteredNamsIsValid) {
      console.log('Name input is valid!');
    }
  },[enteredNamsIsValid]);


  const nameInputIsInvalid = !enteredNamsIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid 
    ? 'form-control invalid'
    : 'form-control' ;

  const nameInputHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if ( enteredName.trim() === '' ) {
      setEnteredNameIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if ( enteredName.trim() === '' ) {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
  }

  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          onBlur={nameInputBlurHandler}
          ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameInputHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
