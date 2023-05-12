import React from 'react'
import OfferComponent from './OfferComponent'
import FormComponent from './FormComponent'

const IntroComponent = () => {
  return (
    <>
        <section>
            <h1>Learn to code by watching others</h1>
            <p>
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                but understanding how developers think is invaluable. 
            </p>
        </section>
        <OfferComponent/>
        <FormComponent/>
    </>
  )
}

export default IntroComponent