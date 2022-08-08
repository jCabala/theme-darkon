//pt
import PropTypes from 'prop-types';
//components
import Image from 'next/image';
//styles
import styles from '../../styles/modules/Contact.module.scss';

const ContactData = ({ config }) => {
  return (
    <div className={styles.contactData}>
      <h2>Contact Details</h2>
      {config?.email && (
        <div className={styles.contactDataObj}>{config?.email}</div>
      )}
      {config?.address && (
        <div className={styles.contactDataObj}>{config?.address}</div>
      )}
      {config?.telephone && (
        <div className={styles.contactDataObj}>{config?.telephone}</div>
      )}
    </div>
  );
};

ContactData.proptTypes = {
  config: PropTypes.object.isRequired,
};

export default ContactData;
