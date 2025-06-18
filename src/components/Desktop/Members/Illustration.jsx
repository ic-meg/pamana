import React from 'react';
import Feather from "../Feather";

const Illustration = ({ setActiveTab }) => {
  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div className="h-full overflow-hidden">
        <h1>Illustration Component</h1>
      </div>
    </Feather>
  );
};

export default Illustration;