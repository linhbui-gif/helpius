import { EIconColor } from './Icon.enum';
const Svg = ({ color = EIconColor.STYLE_10 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
    >
      <g id="svg">
        <path
          id="Vector"
          d="M3.12444 4.65556V14H0.217778V4.65556H3.12444ZM1.68667 3.37556C1.22889 3.37556 0.833333 3.20889 0.5 2.87556C0.166667 2.54222 0 2.14593 0 1.68667C0 1.22889 0.166667 0.833333 0.5 0.5C0.833333 0.166667 1.22889 0 1.68667 0C2.14593 0 2.54222 0.166667 2.87556 0.5C3.20889 0.833333 3.37556 1.22889 3.37556 1.68667C3.37556 1.97852 3.29704 2.25481 3.14 2.51556C2.98444 2.7763 2.7763 2.98444 2.51556 3.14C2.25481 3.29704 1.97852 3.37556 1.68667 3.37556ZM14 8.87556V14H11.0933V9.43778C11.0933 9.0837 11.083 8.79704 11.0622 8.57778C11.0415 8.36 10.9896 8.11037 10.9067 7.82889C10.8237 7.54741 10.6726 7.33333 10.4533 7.18667C10.2341 7.04148 9.94741 6.96889 9.59333 6.96889C8.90593 6.96889 8.44222 7.18741 8.20222 7.62444C7.9637 8.06296 7.84444 8.64667 7.84444 9.37556V14H4.93778V4.65556H7.75111V5.93778H7.78222C7.98963 5.52148 8.33333 5.16222 8.81333 4.86C9.29185 4.55778 9.86444 4.40667 10.5311 4.40667C11.2393 4.40667 11.8281 4.51556 12.2978 4.73333C12.7659 4.95259 13.12 5.27556 13.36 5.70222C13.5985 6.13037 13.7652 6.59407 13.86 7.09333C13.9533 7.59407 14 8.18815 14 8.87556Z"
          fill={color}
          style={{ fill: 'white', fillOpacity: 1 }}
        />
      </g>
    </svg>
  );
};
export default Svg;
