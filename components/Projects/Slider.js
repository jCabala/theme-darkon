//pt
import PropTypes from 'prop-types';
//hooks
import { useRef, useLayoutEffect, useState } from 'react';
//components
import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';
//styles
import styles from '../../styles/modules/Projects.module.scss';

const Slider = ({ projects, modalOpen, handleModalContent }) => {
  const [dragConstraints, setDragConstraints] = useState(0);
  const ref = useRef();

  useLayoutEffect(() => {
    setDragConstraints(-1 * ref?.current?.offsetWidth + 250 || 0);
    console.log(dragConstraints);
  }, [ref.current]);

  const handleOpenModal = content => {
    handleModalContent(content);
    modalOpen();
  };

  return (
    <motion.div className={styles.carousele}>
      <motion.div
        drag='x'
        ref={ref}
        dragConstraints={{ right: 0, left: dragConstraints }}
        className={styles.innerCarousele}
      >
        {projects.map((project, idx) => (
          <ProjectItem
            key={`project-${idx}`}
            project={project}
            modalOpen={handleOpenModal}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

Slider.propTypes = {
  projects: PropTypes.array.isRequired,
  handleModalContent: PropTypes.func.isRequired,
};

export default Slider;
