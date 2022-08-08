//components
import { motion } from 'framer-motion';

const AnimatedPageContainer = ({ children, className }) => {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      style={{
        height: 200,
        width: 200,
        color: 'white',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageContainer;
