
import Button from "components/Button/Button";
import { Context as CountersContext } from "contexts/countersContext"
import { useContext } from "react"

const App = () => {
    const {
        increaseGood,
        goodCounter,
        increaseOk,
        okCounter,
        increaseBad,
        badCounter,
        resetAll
    } = useContext(CountersContext);
    return(
        <div>
            <h1>Buttons</h1>
            <p>Good :{goodCounter}<Button handleClick={increaseGood} text="increase good" /></p>
            <p>Ok :{okCounter}<Button handleClick={increaseOk} text="increase ok"/></p>
            <p>Bad :{badCounter}<Button handleClick={increaseBad} text="increase bad"/></p>    
            <Button handleClick={resetAll} text="reset scores"/>   
        </div>
    )
}
export default App