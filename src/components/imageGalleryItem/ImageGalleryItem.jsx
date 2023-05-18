import PropTypes from 'prop-types';
import css from 'components/imageGalleryItem/image-gallery-item.module.css';

const ImageGalleryItem = (webFormatURL, tags, id) => (
  <li className={css['gallery-item']} key={id}>
    <img src={webFormatURL} alt={tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  webFormatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
