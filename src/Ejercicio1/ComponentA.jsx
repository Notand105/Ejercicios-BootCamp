import {useState} from 'react'
import ComponentB from './ComponentB'
import ejercicio1 from '../Models/ejercicio1.class'


const ComponentA = () => {

  const [state, setstate] = useState(false);
    
  const newContact = new ejercicio1('name','description','email@mail.com',state)

  return (
    <div>
      <ComponentB contact = {newContact} changeStatus={setstate} />
    </div>
  )
}

export default ComponentA
