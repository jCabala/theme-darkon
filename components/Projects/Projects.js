import PropTypes from 'prop-types';
import AnimatedPageContainer from '../AnimatedPageContainer/AnimatedPageContainer';
import styles from '../../styles/modules/Projects.module.scss';
import Slider from './Slider';

const Projects = ({ modalOpen, projects }) => {
  return (
    <AnimatedPageContainer className={styles.container}>
      <Slider projects={projects} modalOpen={modalOpen} />
    </AnimatedPageContainer>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
