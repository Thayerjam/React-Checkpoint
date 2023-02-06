import React, { useState } from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!

const PetList = (props) => {
  const [selectedPets, setSelectedPets] = useState("all");


  const changeSelectedPets = (petType) => {
    setSelectedPets(petType.target.value);
  }

  const filteredPets = props.pets.filter((pet) => {
    if (selectedPets === "all") {
      return pet
    }
    if (selectedPets === "dogs") {
      return pet.species === "dog" ? pet : null
    }
    if (selectedPets === "cats") {
      return pet.species === "cat" ? pet : null
    }
  });

  return (
    <>
      <select className="petFilter" onChange={changeSelectedPets}>
        <option value="all">all</option>
        <option value="cats">cats</option>
        <option value="dogs">dogs</option>
      </select>
      <div className="pet-list">
        {filteredPets.map(pet => ( <SinglePet key={pet.id} pet={pet} /> ))}
      </div>
    </>
  );
};

export default PetList;
