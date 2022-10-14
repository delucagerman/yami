import React from 'react'
import Hero from '../components/Hero'
import Contacto from '../components/Contacto'

const contacto = () => {
  return (
    <div>
      <Hero heading='Contacto' message='Haceme tu consulta y a la brevedad te contestare' />
      <Contacto />
    </div>
  ) 
}

export default contacto
