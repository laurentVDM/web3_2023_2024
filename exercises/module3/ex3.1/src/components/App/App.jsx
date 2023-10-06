import Button from 'components/Button/Button'
import Loading from 'components/Loading/Loading'
import Statistics from 'components/Statistics/Statistics'
import { useEffect, useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true);

  const handleGood = () => {
    setGood(good+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    setBad(bad+1)
  }  

  useEffect(() => {
    // Simulez une attente de 3 secondes avant de désactiver le chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Nettoyez le timer en cas de démontage du composant
  }, []);

  return (
    loading ? (
      <Loading />
    ) : (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>      
    </div>
    )
  )
}

export default App