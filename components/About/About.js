//pt
import PropTypes from 'prop-types';
//hooks
import { useState } from 'react';
//components
import AnimatedPageContainer from '../AnimatedPageContainer/AnimatedPageContainer';
import SwitchableImage from './SwitchableImage';
import Switch from './Switch';
import SwitchableText from './SwitchableText';
//styles
import styles from '../../styles/modules/About.module.scss';

const About = ({ config }) => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => setSwitchOn(!isSwitchOn);

  return (
    <AnimatedPageContainer className={styles.container}>
      <div className={styles.flexLeft}>
        <SwitchableImage isSwitchOn={isSwitchOn} imgPaths={config?.imgPaths} />
        <Switch isSwitchOn={isSwitchOn} toggleSwitch={toggleSwitch} />
      </div>

      <div className={styles.flexRight}>
        <SwitchableText
          title={config?.title}
          subtitle={config?.subtitle}
          texts={config?.texts}
          isSwitchOn={isSwitchOn}
        />
      </div>
    </AnimatedPageContainer>
  );
};

About.propTypes = {
  config: PropTypes.object.isRequired,
};

export default About;
