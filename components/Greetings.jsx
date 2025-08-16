import React from 'react';

function Greeting({ name, children }) {
  const displayName = name || 'World';
  return (
    <div className="greeting componentBox">
      <h1>Hello {displayName}</h1>
      {children && <div className="children">{children}</div>}
    </div>
  );
}

export default Greeting;


