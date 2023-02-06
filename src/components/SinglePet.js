import React, { useState } from 'react';

const SinglePet = (props) => {
  const [adoptionStatus, setAdoptionStatus] = useState(false); 

  const adopted = adoptionStatus ? "adopted" : "available";
  const divClass = `single-pet ${adopted}`

  return (
    <div className={divClass}>
      <div className="pet-name">{props.pet.name}</div>
      <div className="pet-description">{props.pet.description}</div>
      <div className="pet-species">{props.pet.species}</div>
      <div>{adoptionStatus ? "Adopted" : "Available"}</div>
      <button name="Toggle Status" onClick={() => setAdoptionStatus(!adoptionStatus)}>Toggle Status</button>
    </div>
  );
};

export default SinglePet;