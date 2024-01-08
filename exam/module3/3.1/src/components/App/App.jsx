import Button from "components/Button/Button";
import Statisctics from "components/Statisctics/Statistics";
import { useState } from "react";

const App = () => {
    const [ goodCounter, setGoodCounter ] = useState(0);
    const [ neutralCounter, setNeutralCounter ] = useState(0);
    const [ badCounter, setBadCounter ] = useState(0);
  
    const handleGood = () => {
        setGoodCounter(goodCounter+1)
    }
    const handleNeutral = () =>{
        setNeutralCounter(neutralCounter+1)
    }
    const handleBad = () =>{
        setBadCounter(badCounter+1)
    }
  
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGood} text="good"/>
        <Button handleClick={handleNeutral} text="neutral"/>
        <Button handleClick={handleBad} text="bad"/>
        <div>
            <h2>Statisctics</h2>
            <Statisctics goodCounter={goodCounter} neutralCounter={neutralCounter} badCounter={badCounter}/>
        </div>
      </div>
      
    )
  }

export default App