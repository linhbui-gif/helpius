import { Tooltip } from 'antd';

import { EIconColor } from './Icon.enum';
const Svg = ({ color = EIconColor.STYLE_10, width = 24, height = 24 }) => {
  return (
    <Tooltip title={'So sánh'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.39745 18C9.32811 18 9.25945 17.9864 9.19539 17.9598C9.13133 17.9333 9.07312 17.8944 9.02409 17.8454C8.97506 17.7963 8.93617 17.7381 8.90964 17.6741C8.8831 17.61 8.86945 17.5413 8.86945 17.472V15.7618H15.2347C15.3748 15.7618 15.5091 15.7061 15.6081 15.6071C15.7071 15.5081 15.7627 15.3738 15.7627 15.2338V8.87041H17.472C17.612 8.87041 17.7463 8.92604 17.8454 9.02505C17.9444 9.12407 18 9.25837 18 9.39841V17.472C18 17.612 17.9444 17.7463 17.8454 17.8454C17.7463 17.9444 17.612 18 17.472 18H9.39745Z"
          fill={color}
          style={{
            fill: 'color(display-p3 0.1333 0.2745 0.5608)',
            fillOpacity: 1,
          }}
        />
        <path
          d="M14.6026 6H6.528C6.38797 6 6.25367 6.05563 6.15465 6.15465C6.05563 6.25367 6 6.38797 6 6.528V14.6026C6 14.7426 6.05563 14.8769 6.15465 14.9759C6.25367 15.0749 6.38797 15.1306 6.528 15.1306H14.6026C14.7426 15.1306 14.8769 15.0749 14.9759 14.9759C15.0749 14.8769 15.1306 14.7426 15.1306 14.6026V6.528C15.1306 6.38797 15.0749 6.25367 14.9759 6.15465C14.8769 6.05563 14.7426 6 14.6026 6ZM10.1011 10.104H7.7208C7.57185 10.1058 7.42753 10.0522 7.3158 9.95372C7.20407 9.8552 7.13287 9.71872 7.116 9.57072C7.10818 9.48882 7.11755 9.40619 7.14351 9.32812C7.16947 9.25005 7.21145 9.17826 7.26675 9.11735C7.32206 9.05644 7.38948 9.00775 7.46469 8.9744C7.5399 8.94105 7.62125 8.92378 7.70352 8.92368H10.0838C10.2326 8.92198 10.3766 8.97545 10.4882 9.07376C10.5999 9.17207 10.6711 9.30825 10.6882 9.456C10.6961 9.53794 10.6869 9.62063 10.661 9.69878C10.6351 9.77694 10.5932 9.84882 10.538 9.90983C10.4827 9.97084 10.4153 10.0196 10.34 10.0531C10.2648 10.0865 10.1834 10.1039 10.1011 10.104ZM11.8133 8.39136H7.7208C7.57185 8.39315 7.42753 8.3396 7.3158 8.24108C7.20407 8.14256 7.13287 8.00609 7.116 7.85808C7.10818 7.77618 7.11755 7.69355 7.14351 7.61548C7.16947 7.53741 7.21145 7.46562 7.26675 7.40471C7.32206 7.3438 7.38948 7.29511 7.46469 7.26176C7.5399 7.22841 7.62125 7.21114 7.70352 7.21104H11.796C11.945 7.20925 12.0893 7.2628 12.201 7.36132C12.3127 7.45984 12.3839 7.59632 12.4008 7.74432C12.4086 7.82622 12.3992 7.90885 12.3733 7.98692C12.3473 8.06499 12.3054 8.13678 12.25 8.19769C12.1947 8.2586 12.1273 8.30729 12.0521 8.34064C11.9769 8.37399 11.8956 8.39126 11.8133 8.39136Z"
          fill={color}
          style={{
            fill: 'color(display-p3 0.1333 0.2745 0.5608)',
            fillOpacity: 1,
          }}
        />
      </svg>
    </Tooltip>
  );
};
export default Svg;
