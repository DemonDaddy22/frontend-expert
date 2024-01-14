import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/theme';
import { ICON_PATH_VARIANTS } from '../../constants';

const Stop: React.FC<IconProps> = (props) => {
  const { color = COLORS.WHITE, height = 24, width = 24 } = props;

  return (
    <motion.svg initial='hidden' animate='visible' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill={color} height={height} width={width}>
      <motion.path
        variants={ICON_PATH_VARIANTS}
        fillRule='evenodd'
        d='M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z'
        clipRule='evenodd'
      />
    </motion.svg>
  );
};

export default Stop;
