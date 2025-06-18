import React from 'react';
import Feather from "../Feather";

const Opinions = ({ setActiveTab }) => {
  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div>Opinions</div>
    </Feather>
  );
};

export default Opinions;