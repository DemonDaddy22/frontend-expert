import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/theme';
import { ICON_PATH_VARIANTS } from '../../constants';

const Trash: React.FC<IconProps> = (props) => {
  const { color = COLORS.WHITE, height = 24, width = 24 } = props;

  return (
    <motion.svg
      initial='hidden'
      animate='visible'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      stroke={color}
      fill='none'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M4 7l16 0' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M10 11l0 6' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M14 11l0 6' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
    </motion.svg>
  );
};

export default Trash;
