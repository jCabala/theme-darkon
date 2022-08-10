//pt
import PropTypes from 'prop-types';
//components
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import { AiFillCloseCircle } from 'react-icons/ai';
//config
import variants from './variantsSettings';
import CONFIG from '../../data/config';
//styles
import styles from '../../styles/modules/Modal.module.scss';

const Modal = ({ handleClose, content }) => {
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
        {content}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.closeButton}
          onClick={handleClose}
        >
          <AiFillCloseCircle size='2rem' />
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  content: PropTypes.element.isRequired,
};

export default Modal;
