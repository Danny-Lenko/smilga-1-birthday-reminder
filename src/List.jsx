import React from 'react';

const List = ({ person }) => {
  return (
    <div className="person">
      <img src={person.image} alt=""/>
      <div>
        <h4>{person.name}</h4>
        <p>{person.age}</p>
      </div>
    </div>
  );
};

export default List;
