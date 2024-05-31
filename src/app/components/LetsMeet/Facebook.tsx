import React, { useState } from 'react';


const Facebook: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6700" />
          <stop offset="50%" stopColor="#FF3186" />
          <stop offset="100%" stopColor="#49CEAE" />
        </linearGradient>
      </defs>
      <path
        d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.255 7.75 20.7 18.203 23.293V31.334h-4.95V24h4.95v-3.16c0-8.169 3.697-11.955 11.716-11.955 1.521 0 4.145.298 5.218.596v6.648c-.566-.06-1.55-.09-2.773-.09-3.935 0-5.455 1.492-5.455 5.367V24h7.84L33.4 31.334H26.91v16.49C38.793 46.39 48 36.271 48 24H48z"
        fill={hovered ? 'url(#gradient)' : '#ffffff'}
      />
    </svg>
  );
};

export default Facebook;