import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/theme';
import { ICON_PATH_VARIANTS } from '../../constants';

const Menu: React.FC<IconProps> = (props) => {
  const { color = COLORS.WHITE, height = 24, width = 24 } = props;

  return (
    <motion.svg
      initial='hidden'
      animate='visible'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='2.5'
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M4 6l16 0' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M4 12l16 0' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M4 18l16 0' />
    </motion.svg>
  );
};

export default Menu;
