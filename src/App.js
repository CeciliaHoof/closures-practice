import { useState } from 'react';

// local imports
import './App.css';

function App() {
  const [likes, setLikes] = useState(0)

  function increment(){
    /* writing this function this way accomplishes the task,
     but does not allow the button the be clicked and increment likes 
     multiple times within a second */
      // setTimeout(() => {
      //   const newLikes = likes + 1
      //   setLikes(newLikes)
      // }, 1000)
  
    /* This solution allows the button to be clicked and increment likes
      multiple times within one second...*/
    setTimeout(() => {
      setLikes((props) => props += 1)
    }, 1000)
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>Clicking the button below should increment the likes after 1 second.</h3>
      <button onClick={increment}>{`❤️ | ${likes}`}</button>
    </div>
  );
}

export default App;
