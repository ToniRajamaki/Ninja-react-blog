import React from 'react';
import { RingLoader } from 'react-spinners';

function LoadingAnimation() {
  return (
    <div className="loading-animation">
      <RingLoader color="#123abc" loading={true} />
    </div>
  );
}
export default LoadingAnimation;