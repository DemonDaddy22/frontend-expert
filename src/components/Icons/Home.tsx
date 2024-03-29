import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/theme';
import { ICON_PATH_VARIANTS } from '../../constants';

const Home: React.FC<IconProps> = (props) => {
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
      <motion.path variants={ICON_PATH_VARIANTS} d='M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h6.344' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M19 22v-6' />
      <motion.path variants={ICON_PATH_VARIANTS} d='M22 19l-3 -3l-3 3' />
    </motion.svg>
  );
};

export default Home;
