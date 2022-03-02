import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IDeliveryOrderIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const DeliveryOrderIcon: React.FC<IDeliveryOrderIconProps> = ({
  width = 76,
  height = 49,
  fill = '#000',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M68 40a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM24.25 40a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      fill={fill}
    />
    <Path
      d="M75.5 33.75a7.507 7.507 0 0 0-7.5-7.5h-1.25v-2.5a1.25 1.25 0 0 0-.947-1.213l-5-1.25-.003.012a13.272 13.272 0 0 0-2.952-4.468l-.58-.581 1.25-1.25h3.232a1.25 1.25 0 0 0 1.16-.786l2.5-6.25a1.25 1.25 0 0 0-1.16-1.714h-7.801a6.151 6.151 0 0 0-2.749.648l-.764-2.293a1.25 1.25 0 0 0-1.186-.855h-.904l.814-2.036a1.25 1.25 0 0 0-2.32-.928l-2.5 6.25a1.25 1.25 0 0 0 2.32.928l.686-1.714h1.003l.774 2.324a6.09 6.09 0 0 0-1.235 2.676H48a1.25 1.25 0 0 0 0 2.5h2.417c.143.653.392 1.278.736 1.852l.687 1.144A23.866 23.866 0 0 1 51.702 30H40.526a9.404 9.404 0 0 1 2.761-7.27l.597-.596c.234-.235.364-.553.363-.884h.003v-2.5A3.756 3.756 0 0 0 40.5 15H29.25c-.426 0-.849.072-1.25.215V6.25C28 5.56 27.44 5 26.75 5H9.25C8.56 5 8 5.56 8 6.25H5.5v2.5H8v2.5H3v2.5h5v2.5H5.5v2.5H8v2.5c0 .69.56 1.25 1.25 1.25h10.1a16.385 16.385 0 0 0-3.065 2.5H10.5v2.5h3.812A16.246 16.246 0 0 0 13 30.002V30H8v2.5h4.188a16.223 16.223 0 0 0-.438 3.75c0 .69.56 1.25 1.25 1.25h1.614A8.752 8.752 0 0 0 23 48.75a8.75 8.75 0 0 0 8.386-11.25H54.25c0 .69.56 1.25 1.25 1.25h2.59a8.751 8.751 0 0 0 16.833 4.373A8.75 8.75 0 0 0 73.931 35h.319c.69 0 1.25-.56 1.25-1.25Zm-11.25-9.024v1.595c-.859.095-1.703.29-2.517.58a13.514 13.514 0 0 0-.165-2.845l2.682.67ZM60.903 12.5H59.25V8.75h3.153l-1.5 3.75Zm-5.82-3.487a3.654 3.654 0 0 1 1.366-.263h.301v4.482L54.982 15h-1.274l-.411-.684c-.108-.18-.2-.37-.276-.567A1.25 1.25 0 0 0 53 11.25h-.033a3.668 3.668 0 0 1 2.117-2.237ZM25.5 20h-10v-7.5h10V20Zm-15-12.5h15V10H14.25c-.69 0-1.25.56-1.25 1.25V20h-2.5V7.5ZM28 18.75c.001-.69.56-1.25 1.25-1.25H40.5c.69 0 1.25.56 1.25 1.25V20H28v-1.25ZM33 35H14.341A8.76 8.76 0 0 1 23 27.5h6.25A3.757 3.757 0 0 1 33 31.25V35Zm-3.75 5a6.25 6.25 0 1 1-11.976-2.5h11.453c.345.788.523 1.64.523 2.5Zm6.25-5v-3.75A6.256 6.256 0 0 0 29.25 25H23c-1.27 0-2.533.215-3.732.639A13.683 13.683 0 0 1 28 22.5h12.22a11.954 11.954 0 0 0-.808 12.5H35.5Zm5.536-2.5h9.759l-.133.308L49.687 35h-7.33a9.477 9.477 0 0 1-1.322-2.5ZM52.423 35l.523-1.176a26.37 26.37 0 0 0 1.657-16.325h.379l1.098 1.099a10.807 10.807 0 0 1 2.975 9.688A11.275 11.275 0 0 0 54.533 35l-2.11.001Zm13.076-6.25H68a5.01 5.01 0 0 1 4.843 3.75h-3.29a13.953 13.953 0 0 0-9.556 3.75h-3.157a8.76 8.76 0 0 1 8.66-7.5ZM73 40a6.248 6.248 0 0 1-6.881 6.215 6.248 6.248 0 0 1-5.491-7.472c.285-.029.553-.156.756-.36A11.48 11.48 0 0 1 69.553 35h.946a6.24 6.24 0 0 1 2.5 5ZM.5 6.25H3v2.5H.5v-2.5Z"
      fill={fill}
    />
    <Path
      d="M5.5 25H8v2.5H5.5V25ZM.5 25H3v2.5H.5V25ZM3 30h2.5v2.5H3V30Z"
      fill={fill}
    />
  </Svg>
);

export default DeliveryOrderIcon;
