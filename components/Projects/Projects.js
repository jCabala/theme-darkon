import PropTypes from 'prop-types';
import AnimatedPageContainer from '../AnimatedPageContainer/AnimatedPageContainer';
import styles from '../../styles/modules/Projects.module.scss';
import Slider from './Slider';

const Projects = ({ modalOpen, projects, handleModalContent }) => {
  console.log(projects);

  return (
    <AnimatedPageContainer className={styles.container}>
      <Slider
        projects={projects}
        modalOpen={modalOpen}
        handleModalContent={handleModalContent}
      />
    </AnimatedPageContainer>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  modalOpen: PropTypes.func.isRequired,
  handleModalContent: PropTypes.func.isRequired,
};

export default Projects;
