//pt
import PropTypes from 'prop-types';
//components
import { motion } from 'framer-motion';
import Image from '../Image';
//styles
import styles from '../../styles/modules/Projects.module.scss';

const ProjectItem = ({ project, modalOpen }) => {
  return (
    <motion.div onClick={modalOpen} className={styles.item}>
      <Image
        alt={project?.frontmatter?.title}
        src={project?.frontmatter?.cover_image}
        layout='fill'
        objectFit='cover'
      />
    </motion.div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  modalOpen: PropTypes.object.isRequired,
};

export default ProjectItem;
