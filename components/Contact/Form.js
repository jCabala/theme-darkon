//pt
import PropTypes from 'prop-types';
//components
import { motion } from 'framer-motion';
//styles
import styles from '../../styles/modules/Contact.module.scss';

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Drop me a line!</h2>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input type='text' required placeholder='John Doe' />
      </div>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input type='email' placeholder='ex@example.com' required />
      </div>

      <div className={styles.formGroup}>
        <label>Message</label>
        <textarea type='text' placeholder='Hi, nice portfolio!' required />
      </div>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Submit
      </motion.button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
