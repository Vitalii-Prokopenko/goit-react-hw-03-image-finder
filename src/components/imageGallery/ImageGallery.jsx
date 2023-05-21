import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// import PropTypes from 'prop-types';
import css from 'components/imageGallery/image-gallery.module.css';
import ImageGalleryItem from 'components/imageGalleryItem';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30578820-1c894d3db344c99ef40fa5cf7';
const IMAGES_PER_PAGE = 12;

const searchParams = new URLSearchParams({
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  page: 1,
  per_page: IMAGES_PER_PAGE,
});

let searchUrl = '';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchTag !== this.props.searchTag) {
      console.log(prevProps.searchTag);
      console.log(this.props.searchTag);

      searchParams.set('q', this.props.searchTag);
      // searchParams.set('page', currentPage);
      searchUrl = `${BASE_URL}?${searchParams}`;
      console.log(searchUrl);
      return await fetch(searchUrl)
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(data => {
          console.log(data);
          const fetchedImages = data.hits;
          console.log(fetchedImages);
          this.setState(() => {
            return { images: fetchedImages };
          });
          console.log(this.state.images);
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <ul className={css['gallery']}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
