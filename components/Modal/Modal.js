//components
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
//config
import variants from './variantsSettings';
import CONFIG from '../../data/config';
//styles
import styles from '../../styles/modules/Modal.module.scss';

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className={styles.modal}
        variants={variants[CONFIG.modalInitAnimationVariant]}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
