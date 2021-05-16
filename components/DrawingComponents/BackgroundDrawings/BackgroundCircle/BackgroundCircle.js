export default function BackgroundCircle({ className }) {
  return (
    <svg
      viewBox="0 0 647 700"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="350" cy="350" r="350" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="350"
          y1="0"
          x2="350"
          y2="700"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CAF0F8" />
          <stop offset="1" stop-color="#F8FEFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
