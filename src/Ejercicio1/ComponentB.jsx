import React from 'react'
import propTypes from 'prop-types'
import ejercicio1 from '../Models/ejercicio1.class'

const ComponentB = ({contact, changeStatus}) => {
  return (
    <div>
      <h1>{contact.name}</h1>
      <h2>{contact.lastname}</h2>
      <h3>{contact.email}</h3>
      <h3>{contact.conected ? 'Contacto En Línea' : 'Contacto No Disponible' }</h3>
      <button onClick={()=>changeStatus(!contact.conected)}>Cambiar estado</button>
    </div>
  )
}

ComponentB.propTypes = {
    contact: propTypes.instanceOf(ejercicio1)
}


export default ComponentB
