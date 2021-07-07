import React from "react";

const Display = (props) => {
  const {total} = props;

  return (
    <div className="display">
      <h2 total={total}>{total}</h2>
    </div>
  )
};

export default Display;