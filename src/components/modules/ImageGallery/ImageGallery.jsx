import styles from './image-gallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            id={img.id}
            src={img.webformatURL}
            alt={img.tag}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  onClick: PropTypes.func,
};
