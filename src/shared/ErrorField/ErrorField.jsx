import styles from './error-field.module.css';
import PropTypes from 'prop-types';

const ErrorField = ({ error }) => {
  return (
    <div>
      <h2 className={styles.error}>{error}</h2>
    </div>
  );
};

export default ErrorField;

ErrorField.propTypes = {
  error: PropTypes.string,
};
