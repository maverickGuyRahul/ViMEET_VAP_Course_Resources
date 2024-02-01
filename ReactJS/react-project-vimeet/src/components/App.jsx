import React from 'react';

import Header from './Header';
import Footer from './Footer';
import MainComponent from './MainComponent';
import { useState } from 'react';

// let count = 0;

// eslint-disable-next-line react-hooks/rules-of-hooks

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <>
      {/* <Header />
      <MainComponent />
      <Footer /> */}

      <h1> {count} </h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </>
  );
}

export default App;
