import { useContext } from "react"
import {Context as CountersContext} from "../../contexts/CountersContext"
import Button from "components/Button/Button"

const App = () => {
    const {increaseGood, good,
        increaseOk, ok,
        increaseBad, bad,
        resetAll} = useContext(CountersContext)
    return (        
        <div>
            <h1>Buttons</h1>
            <p>Good :{good}<Button handleClick={increaseGood} text="increase good" /></p>
            <p>Ok :{ok}<Button handleClick={increaseOk} text="increase ok"/></p>
            <p>Bad :{bad}<Button handleClick={increaseBad} text="increase bad"/></p>    
            <Button handleClick={resetAll} text="reset scores"/>   
        </div>
        
      )
}
export default App