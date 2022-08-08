//pt
import PropTypes from 'prop-types';
//components
import { motion } from 'framer-motion';

const SwitchableText = ({ title, subtitle, texts, isSwitchOn }) => {
  return (
    <>
      {isSwitchOn && (
        <AnimatedTextContainer
          title={title?.second}
          subtitle={subtitle?.second}
          text={texts?.second}
        />
      )}

      {!isSwitchOn && (
        <AnimatedTextContainer
          title={title?.first}
          subtitle={subtitle?.first}
          text={texts?.first}
        />
      )}
    </>
  );
};

//animations
const AnimatedTextContainer = ({ text, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1>{title}</h1>
    <h3>{subtitle}</h3>

    <p>{text}</p>
  </motion.div>
);

SwitchableText.propTyps = {
  texts: PropTypes.object.isRequired,
  isSwitchOn: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

AnimatedTextContainer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SwitchableText;
