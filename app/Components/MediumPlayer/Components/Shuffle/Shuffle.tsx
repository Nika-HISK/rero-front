import React from 'react';

interface ShuffleIconProps {
  color: string;
}

const ShuffleIcon: React.FC<ShuffleIconProps> = ({ color }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 20.9755L6.28133 20.9895C7.4585 20.9954 8.55867 20.4097 9.212 19.4309L16.4558 8.56454C17.1068 7.58688 18.2058 7.00238 19.3807 7.00588L24.5 7.02454"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.1665 23.3092L24.4998 20.9759L22.1665 18.6426"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.3752 10.063L9.22133 8.46231C8.55983 7.54531 7.49583 7.00398 6.36417 7.00981L3.5 7.02498"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.1304 17.9375L16.444 19.6362C17.109 20.496 18.1369 20.9977 19.2242 20.9942L24.4999 20.9755"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.1665 9.35807L24.4998 7.02474L22.1665 4.69141"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShuffleIcon;
