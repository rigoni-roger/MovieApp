import { Box } from '@mui/material';

const CircleRating = ({
  percent = 8,
  colorBorder = '#03a9f4',
  colorText = 'white',
  size = 150,
}) => {
  const percentage = Math.floor(percent * 10);
  return (
    <Box
      className="percent"
      position="relative"
      width={size}
      height={size}
      bgcolor="transparent"
    >
      <svg style={{ position: 'relative', width: size, height: size }}>
        <circle
          style={{
            width: size,
            height: size,
            fill: 'none',
            opacity: '.4',
            strokeWidth: size * 0.069,
            stroke: 'white',
            transform: `translate(${size * 0.03333}px, ${size * 0.03333}px)`,
            strokeDasharray: 440,
            strokeDashoffset: 0,
          }}
          cx={size * 0.46666}
          cy={size * 0.46666}
          r={size * 0.46666}
        ></circle>
        <circle
          style={{
            width: size,
            height: size,
            fill: 'none',
            strokeWidth: size * 0.069,
            stroke: colorBorder,
            transform: `translate(${size * 0.03333}px, ${size * 0.03333}px)`,
            strokeDasharray: size * 2.93,
            strokeDashoffset: `calc(${
              size * 2.93 - (size * 2.93 * percent) / 10
            })`,
          }}
          cx={size * 0.46666}
          cy={size * 0.46666}
          r={size * 0.46666}
        ></circle>
      </svg>
      <Box
        position="absolute"
        left={0}
        top={0}
        width="100%"
        height="100%"
        className="number"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h2 style={{ fontSize: size * 0.38, color: colorText }}>
          {percentage}
          <span style={{ fontSize: size * 0.16 }}>%</span>
        </h2>
      </Box>
    </Box>
  );
};
export default CircleRating;
