import React from 'react';

function Greetings({ name, children }) {
  const displayName = name || 'World';
  return (
    <div className="greetings componentBox">
      <h1>Hello {displayName}</h1>
      {children && <div className="children">{children}</div>}
    </div>
  );
}

export default Greetings;


