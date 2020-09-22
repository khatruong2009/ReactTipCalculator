import React, { useState } from 'react';

function Result(props) {

  const [hidden, setHidden] = useState(false);

  return (
    <div className="result" style={{display: hidden ? "none" : null}}>
      <p>The total tip for the bill is ${props.tip}.</p>
      <p>The total bill (including tip) for the group is ${props.bill}</p>
      <p>The share of the bill for each person is ${props.share}</p>
    </div>
  )
}

export default Result;