import React from 'react';

function User(props) {

  return (
    <div>
      <h2>Pass Function as Props</h2>
      <button onClick={props.data} >Call App</button>     
    </div>
  );
}

export default User;
