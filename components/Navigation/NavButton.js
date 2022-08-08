import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from '../../styles/modules/Navigation.module.scss';

const NavButton = ({ page, handleSetPage, isCurrent }) => {
  return (
    <motion.button
      className={`${styles.navBtn} ${isCurrent ? styles.currentNavBtn : ''}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleSetPage}
    >
      {page}
    </motion.button>
  );
};

NavButton.propTypes = {
  page: PropTypes.string.isRequired,
  handleSetPage: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool,
};

export default NavButton;
