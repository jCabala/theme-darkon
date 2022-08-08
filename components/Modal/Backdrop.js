//components
import { motion } from 'framer-motion';
//styles
import styles from '../../styles/modules/Modal.module.scss';

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
