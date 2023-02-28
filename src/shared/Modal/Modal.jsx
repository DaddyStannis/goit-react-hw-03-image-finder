import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { ReactSVG } from 'react-svg';
import iconClose from '../images/svg/x.svg';
import { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, onClose, children } = this.props;

    const overlayClasses = isOpen
      ? `${styles.overlay} ${styles['is-open']}`
      : styles.overlay;

    return createPortal(
      <div
        className={overlayClasses}
        onClick={e => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <button className={styles['close-button']} onClick={onClose}>
          <ReactSVG className={styles.icon} src={iconClose} />
        </button>
        <div className={styles.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
