import styles from './image-gallery-item.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, id, onClick }) => {
  return (
    <li className={styles['gallery-item']}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        width="100"
        onClick={e => {
          onClick(id);
        }}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};
