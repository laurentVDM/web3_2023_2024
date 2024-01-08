import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import { useState } from 'react'


const App = () => {
    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")));
  
    const changeCount = (delta) => {
        setCounter(counter + delta)
        localStorage.setItem("counter", JSON.stringify(counter+ delta))
    }
  
    return (
      <div>
        <Display counter={counter}/>
        <Button changeCount={changeCount} delta = {1} text="increase"/>
        <Button changeCount={changeCount} delta = {-10} text="decrease"/>
        <Button changeCount={changeCount} delta = {-counter} text="reset"/>
      </div>
    )
  }

export default App