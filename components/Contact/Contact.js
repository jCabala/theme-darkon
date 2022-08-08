//pt
import PropTypes from 'prop-types';
//components
import AnimatedPageContainer from '../AnimatedPageContainer/AnimatedPageContainer';
import Form from './Form';
import ContactData from './ContactData';
//styles
import styles from '../../styles/modules/Contact.module.scss';

const Contact = ({ config }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <AnimatedPageContainer className={styles.container}>
      <Form onSubmit={handleSubmit} />
      <ContactData config={config} />
    </AnimatedPageContainer>
  );
};

Contact.propTypes = {
  config: PropTypes.object.isRequired,
};

export default Contact;
