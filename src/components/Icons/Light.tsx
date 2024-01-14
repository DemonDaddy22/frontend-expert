import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/theme';
import { ICON_PATH_VARIANTS } from '../../constants';

const Light: React.FC<IconProps> = (props) => {
  const { color = COLORS.WHITE, height = 24, width = 24 } = props;

  return (
    <motion.svg
      initial='hidden'
      animate='visible'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
    </motion.svg>
  );
};

export default Light;
