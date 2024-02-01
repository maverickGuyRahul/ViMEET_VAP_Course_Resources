import React from 'react';
import Card from './Card';
import StudentInfo from '../StudentInfo';

function createCard(cardInfo) {
  return (
    <Card
      key={cardInfo.id}
      name={cardInfo.name}
      rollNo={cardInfo.rollNo}
      dept={cardInfo.dept}
    />
  );
}

function MainComponent() {
  return (
    <>
      {/* <h1> Student Info : </h1>
      {StudentInfo.map(createCard)} */}
    </>
  );
}

export default MainComponent;
