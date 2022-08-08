import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from '../../styles/modules/Projects.module.scss';
import ProjectItem from './ProjectItem';

const Slider = ({ projects, modalOpen }) => {
  console.log(projects);

  return (
    <motion.div className={styles.carousele}>
      <motion.div drag='x' className={styles.innerCarousele}>
        {projects.map((project, idx) => (
          <ProjectItem
            key={`project-${idx}`}
            project={project}
            modalOpen={modalOpen}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

Slider.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Slider;
