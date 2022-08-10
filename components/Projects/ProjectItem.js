//pt
import PropTypes from 'prop-types';
//components
import { motion } from 'framer-motion';
import Image from '../Image';
import ProjectContent from './ProjectContent';
//utils
import { handleDragOrClickTools } from '../../utils';
//styles
import styles from '../../styles/modules/Projects.module.scss';

const ProjectItem = ({ project, modalOpen }) => {
  const [mouseDownCoords, clickOrDrag] = handleDragOrClickTools(() =>
    modalOpen(<ProjectContent project={project} />)
  );

  return (
    <motion.div
      onMouseDown={e => mouseDownCoords(e)}
      onMouseUp={e => clickOrDrag(e)}
      className={styles.item}
    >
      <Image
        alt={project?.frontmatter?.title}
        src={project?.frontmatter?.cover_image}
        layout='fill'
        objectFit='cover'
      />

      <div className={styles.projectTitle}>{project?.frontmatter?.title}</div>
    </motion.div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  modalOpen: PropTypes.func.isRequired,
};

export default ProjectItem;
