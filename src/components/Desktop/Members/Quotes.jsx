import React from 'react';
import Feather from "../Feather";

const Quotes = ({setActiveTab}) => {
  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div>
        <h1>Quotes</h1>
      </div>
    </Feather>
  );
};

export default Quotes;