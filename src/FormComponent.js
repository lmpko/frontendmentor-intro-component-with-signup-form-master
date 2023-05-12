import React, {useState} from 'react'
import errorIMG from "/images/icon-error.svg"

const FormComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!firstName.trim()) {
      setFirstNameError(true);
      
    }

    if (!lastName.trim()) {
      setLastNameError(true);
      
    }

    if (!email.trim()) {
      setEmailError(true);
    }

    if (!password.trim()) {
      setPasswordError(true);
     
    }

    console.log('submitting form data', { firstName, lastName, email, password });

    return true
  }

  const setFirstNameError = (error) => {
    if (error) {
      const firstName = document.getElementById('first-name')
      firstName.classList.add('is-invalid');
    } else {
      document.getElementById('first-name').classList.remove('is-invalid');
    }
  };

  const setLastNameError = (error) => {
    if (error) {
      document.getElementById('last-name').classList.add('is-invalid');
    } else {
      document.getElementById('last-name').classList.remove('is-invalid');
    }
  };

  const setEmailError = (error) => {
    if (error) {
      document.getElementById('email').classList.add('is-invalid');
    } else {
      document.getElementById('email').classList.remove('is-invalid');
    }
  };

  const setPasswordError = (error) => {
    if (error) {
      document.getElementById('password').classList.add('is-invalid');
    } else {
      document.getElementById('password').classList.remove('is-invalid');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        {formSubmitted && firstName.trim() === '' && <img src={errorIMG} alt="alert-icon" className='icon'/>}

        <input id="first-name" type="text" name="firstName" value={firstName} onChange={(e) => {
          setFirstName(e.target.value);
          setFirstNameError(false);
        }} placeholder='First name'/>

        { formSubmitted && firstName.trim() === '' &&  <span className="error-message">First name cannot be empty</span>}
      </label>

        
      <label htmlFor="lastName">
        {formSubmitted && lastName.trim() === '' && <img src={errorIMG} alt="alert-icon" className='icon'/>}

        <input id="last-name" type="text" name="lastName"  value={lastName}onChange={(e) => {
          setLastName(e.target.value);
          setLastNameError(false);
        }} placeholder='Last name'/>

        { formSubmitted && lastName.trim() === '' && <span className="error-message">Second name cannot be empty</span>}
      </label>


      <label htmlFor="email">
        {formSubmitted && email.trim() === '' && <img src={errorIMG} alt="alert-icon" className='icon'/>}

        <input id="email" type="email" name="email" value={email} onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(false);
        }} placeholder='Email Adress'/>

        { formSubmitted && email.trim() === '' && <span className="error-message">Looks like this in not an email</span>}
      </label>


      <label htmlFor="password">
        {formSubmitted && password.trim() === '' && <img src={errorIMG} alt="alert-icon" className='icon'/>}

        <input id="password" type="password" name="password" value={password} onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError(false);
        }} placeholder='Password'/>

        { formSubmitted && password.trim() === '' && <span className="error-message">This field cannot be empty</span>}
      </label>


        <button type='submit'>Claim your free trial</button>

        <p>
            By clicking the button, you are agreeing to our <span>Terms and Services</span> 
        </p>
    </form>
  )
}

export default FormComponent