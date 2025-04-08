import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter===20){
      alert("Counter value is greater than 20");
      return;
    }
    setCounter(counter + 1);
    setCounter(counter + 1);//giving even it multiple times doesnot make the value increment 4 times instead it 
    // increments only 1 time on one click because of react batching
    // batching is a process in react where it groups multiple state updates into a single re-render for performance optimization
    // setcounter k andar ek call back milta hai setcounter(()=> {})
      // usestate batches m ui updates ko send krta hai (batches m bharta hai pehle to inn sab processes ka ek hi batch banta hai or send hota hai )
  
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  
  const removeValue = () => {
    if(counter === 0){
      alert("Counter value is less than 0");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Amit's Interface</h1>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
