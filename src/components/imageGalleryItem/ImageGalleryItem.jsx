import PropTypes from 'prop-types';
import css from 'components/imageGalleryItem/image-gallery-item.module.css';

const ImageGalleryItem = () => (
  <li className={css['gallery-item']}>
    <img src="" alt="" />
  </li>
);

ImageGalleryItem.propTypes = {
  //   : PropTypes.string.isRequired,
};

export default ImageGalleryItem;
