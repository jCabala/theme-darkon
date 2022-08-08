//pt
import PropTypes from 'prop-types';
//components
import { motion } from 'framer-motion';
import Image from './../Image';
//styles
import styles from '../../styles/modules/About.module.scss';

const SwitchableImage = ({ imgPaths, isSwitchOn }) => {
  return (
    <div className={styles.imgWrapper}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: !isSwitchOn ? 1 : 0 }}
        className={styles.imgContainer}
      >
        <Image src={imgPaths.first} alt='' asImg />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isSwitchOn ? 1 : 0 }}
        className={styles.imgContainer}
      >
        <Image src={imgPaths.second} alt='' asImg />
      </motion.div>
    </div>
  );
};

SwitchableImage.propTypes = {
  imgPaths: PropTypes.object.isRequired,
  isSwitchOn: PropTypes.bool.isRequired,
};

export default SwitchableImage;
