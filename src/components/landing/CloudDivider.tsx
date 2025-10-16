import React from 'react';

const CloudDivider: React.FC = () => {
  return (
    <div className="relative w-full h-[100px] bg-white -mt-1">
      <svg
        className="absolute bottom-0 w-full h-[100px]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 Q120,20 240,50 T480,50 Q600,20 720,50 T960,50 Q1080,20 1200,50 T1440,50 L1440,100 L0,100 Z"
          fill="white"
        />
        <path
          d="M0,60 Q100,35 200,60 T400,60 Q500,35 600,60 T800,60 Q900,35 1000,60 T1200,60 Q1300,35 1400,60 L1440,60 L1440,100 L0,100 Z"
          fill="white"
        />
        <path
          d="M0,70 Q80,50 160,70 T320,70 Q400,50 480,70 T640,70 Q720,50 800,70 T960,70 Q1040,50 1120,70 T1280,70 Q1360,50 1440,70 L1440,100 L0,100 Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default CloudDivider;
