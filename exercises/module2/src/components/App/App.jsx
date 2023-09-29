import Button from 'components/Button/Button';
import Display from 'components/Display/Display';
import { useState } from 'react';


const App = () => {
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")));

  const changeCount = (delta) => {
    setCounter(counter + delta);
    localStorage.setItem("counter", JSON.stringify(counter + delta));
  };

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} delta={10} text="Incrémenter" />
      <Button changeCount={changeCount} delta={-counter} text="Reset" />
      <Button changeCount={changeCount} delta={-10} text="Décrémenter" />
    </div>
  );
};

export default App;
