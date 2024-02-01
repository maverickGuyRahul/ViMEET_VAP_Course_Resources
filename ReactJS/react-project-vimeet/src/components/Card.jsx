import React from 'react';

function Card(props) {
  return (
    <div
      className="card"
      style={{
        border: '1px solid black',
        margin: '10px',
        display: 'inline-block',
        padding: '10px',
      }}
    >
      <h3>name : {props.name}</h3>
      <h3>Roll No : {props.rollNo}</h3>
      <h3>Department : {props.dept}</h3>
    </div>
  );
}

export default Card;
