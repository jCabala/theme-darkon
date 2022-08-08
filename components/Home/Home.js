//pt
import PropTypes from 'prop-types';
//components
import AnimatedPageContainer from '../AnimatedPageContainer/AnimatedPageContainer';
import Image from 'next/image';
//styles
import styles from '../../styles/modules/Home.module.scss';

const Home = ({ config: { title, icon, subtitle } }) => {
  return (
    <AnimatedPageContainer className={styles.container}>
      <h1>
        {title?.plain} <span>{title?.colored}</span>
      </h1>
      <h2>{subtitle}</h2>
      {icon}
    </AnimatedPageContainer>
  );
};

Home.propTypes = {
  config: PropTypes.object,
};

export default Home;
