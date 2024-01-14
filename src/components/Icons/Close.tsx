import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/theme';
import { ICON_PATH_VARIANTS } from '../../constants';

const Close: React.FC<IconProps> = (props) => {
  const { color = COLORS.WHITE, height = 24, width = 24 } = props;

  return (
    <motion.svg
      initial='hidden'
      animate='visible'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='3'
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M18 6l-12 12' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M6 6l12 12' />
    </motion.svg>
  );
};

export default Close;
