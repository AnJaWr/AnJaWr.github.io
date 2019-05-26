import React from "react";

// to nie jest element klasowy!

const Heading = props => {
  return <h1 className="main-heading">{props.headingText}</h1>;
  // tu nie ma elementu obiektu, wię bez this!
};

export default Heading;
