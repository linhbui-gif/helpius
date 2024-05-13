import { EIconColor } from './Icon.enum';
const Svg = ({ color = EIconColor.WHITE }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={49}
      height={39}
      viewBox="0 0 49 39"
      fill="none"
    >
      <path
        d="M24.4987 32.577C23.5751 32.576 22.6677 32.3337 21.8664 31.8743L8.81037 24.3747V30.2653C8.86989 30.3037 8.92558 30.3478 8.98702 30.3824L22.1429 37.9319C22.8596 38.3441 23.6719 38.561 24.4987 38.561C25.3256 38.561 26.1379 38.3441 26.8546 37.9319L40.0086 30.3747C40.7294 29.9604 41.3282 29.3632 41.7445 28.6435C42.1608 27.9238 42.3799 27.107 42.3798 26.2755V23.1133L27.1311 31.8743C26.3298 32.3337 25.4224 32.576 24.4987 32.577ZM47.3295 12.8239L26.8546 1.06775C26.138 0.655153 25.3256 0.437988 24.4987 0.437988C23.6719 0.437988 22.8595 0.655153 22.1429 1.06775L1.66795 12.8239C1.31386 13.0281 1.01978 13.3219 0.815302 13.6758C0.610828 14.0297 0.503174 14.4312 0.503174 14.84C0.503174 15.2487 0.610828 15.6502 0.815302 16.0041C1.01978 16.358 1.31386 16.6518 1.66795 16.856L23.3467 29.313C23.6996 29.5156 24.0995 29.6222 24.5064 29.6222C24.9134 29.6222 25.3132 29.5156 25.6661 29.313L47.3372 16.8617C47.6923 16.6573 47.9871 16.3628 48.1918 16.0079C48.3965 15.653 48.5039 15.2503 48.5032 14.8406C48.5024 14.4309 48.3935 14.0287 48.1874 13.6746C47.9813 13.3204 47.6854 13.027 47.3295 12.8239Z"
        fill="white"
        style={{ fill: `${color}`, fillOpacity: 1 }}
      />
    </svg>
  );
};
export default Svg;
