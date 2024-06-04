import { EIconColor } from './Icon.enum';
const Svg = ({ color = EIconColor.STYLE_10 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
    >
      <path
        d="M38.468 21.5C38.4684 20.3206 38.8666 19.1758 39.5983 18.2508C40.33 17.3258 41.3524 16.6748 42.5 16.4029C41.9817 14.2582 41.1357 12.2063 39.9918 10.3196C38.9855 10.9462 37.7965 11.2131 36.619 11.0766C35.4415 10.9402 34.345 10.4086 33.5087 9.56852C32.6723 8.72846 32.1455 7.62965 32.0143 6.45154C31.8831 5.27343 32.1552 4.08564 32.7862 3.08216C30.9029 1.92669 28.8528 1.06822 26.708 0.53696C26.4468 1.70368 25.795 2.74621 24.8605 3.49192C23.9259 4.23763 22.7647 4.64179 21.5691 4.63748C20.3736 4.63317 19.2153 4.22064 18.2862 3.46821C17.357 2.71578 16.7127 1.66857 16.46 0.5C14.3021 1.01339 12.2369 1.85839 10.3381 3.00488C10.9994 4.01579 11.2914 5.22397 11.1649 6.42531C11.0384 7.62666 10.5011 8.74751 9.6438 9.59852C8.78647 10.4495 7.66167 10.9785 6.45942 11.0961C5.25718 11.2137 4.05119 10.9127 3.0452 10.244C1.88495 12.1394 1.02631 14.2035 0.5 16.3626C1.68563 16.6025 2.75177 17.2452 3.51761 18.1815C4.28345 19.1179 4.70185 20.2903 4.70185 21.5C4.70185 22.7097 4.28345 23.8821 3.51761 24.8185C2.75177 25.7548 1.68563 26.3975 0.5 26.6374C1.02631 28.7965 1.88495 30.8606 3.0452 32.756C4.05131 32.0911 5.25581 31.7932 6.45585 31.9125C7.6559 32.0319 8.77816 32.5611 9.63366 33.411C10.4892 34.261 11.0256 35.3798 11.1527 36.5791C11.2798 37.7783 10.9897 38.9847 10.3314 39.9951C12.2323 41.1422 14.2998 41.9873 16.46 42.5C16.7127 41.3314 17.357 40.2842 18.2862 39.5318C19.2153 38.7794 20.3736 38.3668 21.5691 38.3625C22.7647 38.3582 23.9259 38.7624 24.8605 39.5081C25.795 40.2538 26.4468 41.2963 26.708 42.463C28.8557 41.9326 30.9087 41.0741 32.7946 39.9178C32.1636 38.9144 31.8915 37.7266 32.0227 36.5485C32.1539 35.3703 32.6807 34.2715 33.5171 33.4315C34.3534 32.5914 35.4499 32.0598 36.6274 31.9234C37.8049 31.7869 38.9939 32.0538 40.0002 32.6804C41.1412 30.7932 41.9843 28.7413 42.5 26.5971C41.3524 26.3252 40.33 25.6742 39.5983 24.7492C38.8666 23.8242 38.4684 22.6794 38.468 21.5ZM21.5 27.7294C20.268 27.7291 19.0638 27.3635 18.0396 26.6788C17.0154 25.9941 16.2172 25.0211 15.7459 23.8827C15.2747 22.7444 15.1516 21.4919 15.3921 20.2837C15.6327 19.0754 16.2261 17.9656 17.0974 17.0945C17.9687 16.2235 19.0786 15.6304 20.287 15.3901C21.4953 15.1499 22.7478 15.2734 23.886 15.7449C25.0242 16.2164 25.997 17.0149 26.6814 18.0393C27.3658 19.0637 27.7311 20.268 27.7311 21.5C27.7307 23.1523 27.074 24.7368 25.9055 25.905C24.737 27.0732 23.1523 27.7294 21.5 27.7294Z"
        fill={color}
        style={{ fill: `${color}`, fillOpacity: 1 }}
      />
    </svg>
  );
};
export default Svg;
