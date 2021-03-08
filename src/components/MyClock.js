import React, { useEffect, useState } from 'react';
import moment from 'moment';
 
function MyClock() {
  const [value, setValue] = useState(moment().format('HH:mm:ss'));
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(moment().format('HH:mm:ss')),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
 
  return (
    <div className="d-flex justify-content-center mb-5">
      <span className="fs-1 text-dark fw-bold">{value}</span>
    </div>
  )
}

export default MyClock