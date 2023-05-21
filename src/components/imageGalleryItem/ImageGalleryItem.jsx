import PropTypes from 'prop-types';
import css from 'components/imageGalleryItem/image-gallery-item.module.css';

const ImageGalleryItem = ({ image }) => (
  <>
    <li className={css['gallery-item']}>
      <img
        className={css['imageGalleryItem-image']}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  </>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
