import React from 'react';
import Feather from "../Feather";

const References = ({setActiveTab}) => {
  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div>
        <h1>References</h1>
      </div>
    </Feather>
  );
};

export default References;