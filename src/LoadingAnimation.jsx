import React from 'react';
import { RingLoader } from 'react-spinners';

function LoadingAnimation() {
  return (
    <div className="loading-animation">
      <RingLoader color="var(--main)" loading={true} />
    </div>
  );
}
export default LoadingAnimation;