import React from 'react';
import './Card.css';

const Card = ({ unitTitle, unitCode, creditPoints, semesterOfferings }) => {
  const abbreviateSemester = (semester) => {
    return semester === 'Semester 1' ? 'S1' : semester === 'Semester 2' ? 'S2' : semester;
  };
  return (
    <div className="card">
      <div className="ellipsis"></div>
      <h2 className="unit-title">{unitTitle}</h2>
      <p className="unit-code"> {unitCode}</p>
      <p className="credit-points">{creditPoints} CP</p>
      <div className="semester-offerings">
        {semesterOfferings.map((offering, index) => (
          <div key={index} className="offering">
            {abbreviateSemester(offering)}
            {index < semesterOfferings.length - 1 && ', '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
