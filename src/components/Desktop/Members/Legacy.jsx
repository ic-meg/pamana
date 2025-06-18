import React from "react"
import Feather from "../Feather"

const Legacy = ({ setActiveTab }) => {
  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div>
        <h1>Legacy Component</h1>
      </div>
    </Feather>
  )
}

export default Legacy
