import React from 'react';

function BodyPart({ name }) {
  name = name[0].toUpperCase() + name.substring(1);
  const functionToImplemet = () => { console.log('rendered'); }

  return (
    <div className="col-2">
      <div onClick={functionToImplemet} className="cs-item btn">
        <span className="flaticon-002-dumbell"></span>
        <h4>{name}</h4>
      </div>
    </div>
  )
}

export default BodyPart;