import React, { useState } from 'react';

function Result() {

  const [hidden, setHidden] = useState(true);

  return (
    <div className="result" style={{display: hidden ? "none" : null}}>
      <p>fast and furious</p>
    </div>
  )
}

export default Result;