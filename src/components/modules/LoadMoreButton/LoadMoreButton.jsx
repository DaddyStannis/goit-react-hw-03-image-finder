import styles from './load-more-button.module.css';
import PropTypes from 'prop-types';

const LoadMoreButton = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
