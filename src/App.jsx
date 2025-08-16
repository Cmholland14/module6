import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <Greeting />
\
      <Greeting name="John">
        <p>Welcome to the site!</p>
      </Greeting>
    </div>
  );
}

export default App;


