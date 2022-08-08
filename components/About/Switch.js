//pt
import PropTypes from 'prop-types';
//components
import { motion } from 'framer-motion';
//styles
import styles from '../../styles/modules/About.module.scss';

const Switch = ({ isSwitchOn, toggleSwitch }) => {
  return (
    <div
      className={`${styles.switch} ${isSwitchOn && styles.switchOn}`}
      onClick={toggleSwitch}
    >
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
};

//animations
const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

Switch.propTypes = {
  isSwitchOn: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
};

export default Switch;
