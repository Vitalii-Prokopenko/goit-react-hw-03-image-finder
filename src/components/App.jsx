import React, { Component } from 'react';
import ImageGallery from './imageGallery';
import SearchBar from './searchBar';
import Button from './button';
import Loader from './loader';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30578820-1c894d3db344c99ef40fa5cf7';
const IMAGES_PER_PAGE = 12;

const searchParams = new URLSearchParams({
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  page: 0,
  per_page: IMAGES_PER_PAGE,
});

let searchUrl = '';
let currentPage = 1;

class App extends Component {
  state = {
    searchTag: '',
    images: [],
    status: 'idle',
    totalImages: 0,
    totalPages: 0,
    currentPage: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchTag !== this.state.searchTag ||
      prevState.currentPage !== this.state.currentPage
    ) {
      searchParams.set('q', this.state.searchTag);
      searchParams.set('page', this.state.currentPage);
      searchUrl = `${BASE_URL}?${searchParams}`;
      this.setState({ status: 'pending' });

      return await fetch(searchUrl)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          const fetchedImages = data.hits;
          const totalFetchedImages = data.totalHits;
          const totalPages = Math.ceil(totalFetchedImages / IMAGES_PER_PAGE);
          this.setState(prevState => {
            const imagesToShow = [...prevState.images, ...fetchedImages];
            console.log(imagesToShow);
            return {
              images: imagesToShow,
              status: 'resolved',
              totalImages: totalFetchedImages,
              totalPages: totalPages,
            };
          });
        })
        .catch(error => {
          this.setState(() => {
            console.log(error);
            return { status: 'rejected' };
          });
        });
    }
  }

  handleLoadMore = () => {
    console.log('hello');
    currentPage += 1;
    this.setState(() => {
      return { currentPage: currentPage };
    });
  };

  formSubmitHandler = data => {
    this.setState(() => {
      return { searchTag: data };
    });
  };

  render() {
    const { status } = this.state;

    if (status === 'idle') {
      return <SearchBar propOnSubmit={this.formSubmitHandler} />;
    }

    if (status === 'pending') {
      return (
        <>
          <SearchBar propOnSubmit={this.formSubmitHandler} />
          <Loader />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <SearchBar propOnSubmit={this.formSubmitHandler} />
          <ImageGallery images={this.state.images} />
          <Button handleLoadMore={this.handleLoadMore} />
        </>
      );
    }
  }
}

export default App;
