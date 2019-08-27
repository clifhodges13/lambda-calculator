import React from "react";

const OperatorButton = (props) => {
  const { char, value } = props;

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button operator-button" char={char} value={value}>{ char }</button>
    </>
  );
};

export default OperatorButton;