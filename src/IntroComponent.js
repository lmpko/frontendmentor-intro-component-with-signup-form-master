import React from 'react'
import OfferComponent from './OfferComponent'
import FormComponent from './FormComponent'

const IntroComponent = () => {
  return (
    <>
        <section className='overview'>
            <h1>Learn to code by watching others</h1>
            <p>
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                but understanding how developers think is invaluable. 
            </p>
        </section>
        <section className='form-section'>
          <OfferComponent/>
          <FormComponent/>
        </section>
       
    </>
  )
}

export default IntroComponent