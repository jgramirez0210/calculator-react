import React, { useState } from 'react';

function Calculator() {
  const [input,]

  const user = { displayName: 'Jesse' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
    </div>
  );
}

export default Home;
