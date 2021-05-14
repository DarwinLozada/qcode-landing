export default function HeroSectionWave({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 358"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0L60 7.45833C120 14.9167 240 29.8333 360 74.5833C480 119.333 600 193.917 720 186.458C840 179 960 89.5 1080 74.5833C1200 59.6667 1320 119.333 1380 149.167L1440 179V358H1380C1320 358 1200 358 1080 358C960 358 840 358 720 358C600 358 480 358 360 358C240 358 120 358 60 358H0V0Z"
        fill="url(#paint0_linear)"
        style={{ fill: "url(#waveGradient)" }}
      />
      <defs>
        <linearGradient
          id="waveGradient"
          x1="720"
          y1="0"
          x2="720"
          y2="358"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.26875" stop-color="#E6FBFF" />
          <stop offset="1" stop-color="#E6FBFF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
