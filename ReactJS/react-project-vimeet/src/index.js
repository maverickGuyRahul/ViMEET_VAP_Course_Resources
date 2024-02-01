import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const name = 'Rahul';
const stylingForH1 = {
  color: 'blue',
  fontSize: '100px',
  border: '1 px solid black',
};
const imageSource =
  'https://www.secondrecipe.com/wp-content/uploads/2020/06/veg-manchow-soup-1157x1536.jpg';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <h1> My name is {3 + 9} </h1> */}
    {/* <h1 style={{ color: 'red' }}>
      My lucky no - {Math.floor(Math.random() * 10)}
    </h1> */}

    {/* <h1 className="heading" contentEditable="false">
      My lucky no - {Math.floor(Math.random() * 10)}
    </h1> */}

    {/* <img className="soup" src={imageSource} />
    <h1 style={stylingForH1}> My favvvvv soup!! </h1> */}

    <App />
  </div>
);
