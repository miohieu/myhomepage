
const MainLogo = props => (
  <svg
    className="w-3 inline-block transition-transform hover:rotate-[20deg]"
    width="40"
    height="40"
    viewBox="0 0 120 120"
    fill="none"
    {...props}
  >
    <rect width="120" height="120" fill="#766262" />
    <g id="Frame 1">
      <rect width="120" height="120" fill="white" />
      <ellipse id="body" cx="60" cy="60" rx="32" ry="34" fill="black" />
      <ellipse id="eyes" cx="66" cy="47" rx="6" ry="4" fill="white" />
      <path id="ear" d="M43 7L49.9282 35.5H36.0718L43 7Z" fill="black" />
      <path id="ear_2" d="M70.5 8L79.5933 35.75H61.4067L70.5 8Z" fill="black" />
      <ellipse id="eyes_2" cx="45" cy="47" rx="6" ry="4" fill="white" />
      <ellipse id="mouth" cx="56" cy="67.5" rx="10" ry="7.5" fill="white" />
    </g>
  </svg>
)

export default MainLogo
