import React from 'react';
import Feather from "../Feather";


const Politics = ({ setActiveTab }) => {
  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div>
        <h1>Politics Component</h1>
      </div>
    </Feather>
  );
};

export default Politics;