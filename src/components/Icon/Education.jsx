import { EIconColor } from './Icon.enum';

const Svg = ({ color = EIconColor.STYLE_10 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
    >
      <path
        d="M37.7752 1.49854H7.22554C6.64623 1.49854 6.09065 1.72866 5.68102 2.1383C5.27139 2.54793 5.04126 3.10351 5.04126 3.68281V25.5021C5.04126 26.0814 5.27139 26.6369 5.68102 27.0466C6.09065 27.4562 6.64623 27.6863 7.22554 27.6863H37.7752C38.3545 27.6863 38.9101 27.4562 39.3197 27.0466C39.7293 26.6369 39.9594 26.0814 39.9594 25.5021V3.68281C39.9594 3.10351 39.7293 2.54793 39.3197 2.1383C38.9101 1.72866 38.3545 1.49854 37.7752 1.49854ZM12.1351 21.9551C11.5958 21.9548 11.0688 21.7946 10.6205 21.4947C10.1723 21.1949 9.82305 20.7689 9.61691 20.2706C9.41077 19.7722 9.35701 19.224 9.46242 18.6951C9.56783 18.1662 9.82768 17.6805 10.2091 17.2993C10.5906 16.9181 11.0765 16.6585 11.6054 16.5534C12.1343 16.4483 12.6826 16.5024 13.1808 16.7089C13.679 16.9153 14.1048 17.2649 14.4043 17.7133C14.7039 18.1617 14.8638 18.6889 14.8638 19.2281C14.8638 19.5864 14.7932 19.9411 14.656 20.2721C14.5189 20.6031 14.3179 20.9038 14.0645 21.157C13.8111 21.4103 13.5103 21.6111 13.1792 21.748C12.8482 21.885 12.4934 21.9554 12.1351 21.9551ZM12.1351 13.2281C11.5954 13.2281 11.0679 13.0681 10.6192 12.7682C10.1704 12.4684 9.82069 12.0422 9.61416 11.5437C9.40763 11.0451 9.3536 10.4964 9.45888 9.9671C9.56417 9.43779 9.82405 8.95159 10.2057 8.56998C10.5873 8.18837 11.0735 7.92849 11.6028 7.8232C12.1321 7.71791 12.6807 7.77195 13.1793 7.97848C13.6779 8.185 14.1041 8.53475 14.4039 8.98347C14.7038 9.4322 14.8638 9.95976 14.8638 10.4994C14.8638 10.8578 14.7932 11.2126 14.6561 11.5437C14.5189 11.8747 14.318 12.1755 14.0646 12.4289C13.8112 12.6823 13.5104 12.8833 13.1793 13.0204C12.8483 13.1575 12.4935 13.2281 12.1351 13.2281ZM29.5925 21.6829H20.8638C20.6807 21.6894 20.4982 21.6589 20.3272 21.5932C20.1562 21.5276 20.0001 21.4282 19.8683 21.3009C19.7365 21.1737 19.6317 21.0212 19.5601 20.8526C19.4885 20.684 19.4516 20.5026 19.4516 20.3194C19.4516 20.1362 19.4885 19.9549 19.5601 19.7863C19.6317 19.6177 19.7365 19.4652 19.8683 19.3379C20.0001 19.2107 20.1562 19.1113 20.3272 19.0457C20.4982 18.98 20.6807 18.9495 20.8638 18.9559H29.5925C29.9459 18.9684 30.2806 19.1174 30.5262 19.3718C30.7717 19.6261 30.909 19.9659 30.909 20.3194C30.909 20.673 30.7717 21.0127 30.5262 21.2671C30.2806 21.5214 29.9459 21.6705 29.5925 21.6829ZM33.9611 16.2273H20.8638C20.6807 16.2337 20.4982 16.2032 20.3272 16.1376C20.1562 16.0719 20.0001 15.9725 19.8683 15.8453C19.7365 15.7181 19.6317 15.5656 19.5601 15.3969C19.4885 15.2283 19.4516 15.047 19.4516 14.8638C19.4516 14.6806 19.4885 14.4993 19.5601 14.3306C19.6317 14.162 19.7365 14.0095 19.8683 13.8823C20.0001 13.755 20.1562 13.6556 20.3272 13.59C20.4982 13.5244 20.6807 13.4939 20.8638 13.5003H33.956C34.1391 13.4939 34.3216 13.5244 34.4927 13.59C34.6637 13.6556 34.8198 13.755 34.9516 13.8823C35.0834 14.0095 35.1882 14.162 35.2598 14.3306C35.3314 14.4993 35.3682 14.6806 35.3682 14.8638C35.3682 15.047 35.3314 15.2283 35.2598 15.3969C35.1882 15.5656 35.0834 15.7181 34.9516 15.8453C34.8198 15.9725 34.6637 16.0719 34.4927 16.1376C34.3216 16.2032 34.1391 16.2337 33.956 16.2273H33.9611ZM33.9611 10.7716H20.8638C20.6807 10.7781 20.4982 10.7475 20.3272 10.6819C20.1562 10.6163 20.0001 10.5169 19.8683 10.3896C19.7365 10.2624 19.6317 10.1099 19.5601 9.94129C19.4885 9.77266 19.4516 9.59133 19.4516 9.40814C19.4516 9.22494 19.4885 9.04362 19.5601 8.87499C19.6317 8.70636 19.7365 8.55388 19.8683 8.42663C20.0001 8.29938 20.1562 8.19998 20.3272 8.13435C20.4982 8.06873 20.6807 8.03822 20.8638 8.04465H33.956C34.1391 8.03822 34.3216 8.06873 34.4927 8.13435C34.6637 8.19998 34.8198 8.29938 34.9516 8.42663C35.0834 8.55388 35.1882 8.70636 35.2598 8.87499C35.3314 9.04362 35.3682 9.22494 35.3682 9.40814C35.3682 9.59133 35.3314 9.77266 35.2598 9.94129C35.1882 10.1099 35.0834 10.2624 34.9516 10.3896C34.8198 10.5169 34.6637 10.6163 34.4927 10.6819C34.3216 10.7475 34.1391 10.7781 33.956 10.7716H33.9611Z"
        fill={color}
        style={{
          fill: `${color}`,
          fillOpacity: 1,
        }}
      />
      <path
        d="M19.9592 27.6626L19.939 27.6828H19.9794L19.9592 27.6626ZM30.9831 40.1651L24.1362 33.3182V31.853C24.1362 31.419 23.9638 31.0028 23.6569 30.6958C23.35 30.3889 22.9337 30.2165 22.4997 30.2165C22.0656 30.2165 21.6494 30.3889 21.3425 30.6958C21.0356 31.0028 20.8631 31.419 20.8631 31.853V33.3182L14.0163 40.1651C13.8644 40.3171 13.7439 40.4975 13.6617 40.6961C13.5795 40.8947 13.5373 41.1076 13.5374 41.3225C13.5375 41.7565 13.7101 42.1727 14.0171 42.4796C14.3242 42.7864 14.7405 42.9586 15.1745 42.9585C15.6086 42.9583 16.0248 42.7857 16.3316 42.4787L20.8682 37.9421V41.8621C20.8682 42.2961 21.0406 42.7124 21.3475 43.0193C21.6544 43.3262 22.0707 43.4986 22.5047 43.4986C22.9387 43.4986 23.355 43.3262 23.6619 43.0193C23.9688 42.7124 24.1412 42.2961 24.1412 41.8621V37.9472L28.6778 42.4838C28.8297 42.6358 29.0101 42.7564 29.2086 42.8387C29.4072 42.921 29.62 42.9634 29.8349 42.9635C30.0498 42.9636 30.2626 42.9213 30.4612 42.8392C30.6598 42.757 30.8403 42.6365 30.9923 42.4846C31.1443 42.3327 31.265 42.1523 31.3473 41.9538C31.4296 41.7552 31.472 41.5424 31.4721 41.3275C31.4722 41.1126 31.4299 40.8998 31.3477 40.7012C31.2656 40.5026 31.1451 40.3221 30.9931 40.1701L30.9831 40.1651Z"
        fill={color}
        style={{
          fill: `${color}`,
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};
export default Svg;
