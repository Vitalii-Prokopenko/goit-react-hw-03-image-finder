import React, { Component } from 'react';
import ImageGallery from './imageGallery';
import SearchBar from './searchBar';
import Button from './button';
import Loader from './loader';
import * as ImageAPI from '../services/services-api';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '30578820-1c894d3db344c99ef40fa5cf7';
// const IMAGES_PER_PAGE = 12;

// const searchParams = new URLSearchParams({
//   key: API_KEY,
//   q: '',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   page: 0,
//   per_page: IMAGES_PER_PAGE,
// });

// let searchUrl = '';
// let currentPage = 1;

class App extends Component {
  state = {
    searchTag: '',
    images: [],
    status: 'idle',
    totalImages: 0,
    totalPages: 0,
    currentPage: 1,
    showBtn: false,
    isEmpty: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchTag, currentPage } = this.state;
    if (
      prevState.searchTag !== searchTag ||
      prevState.currentPage !== currentPage
    ) {
      ImageAPI.getImages(searchTag, currentPage).then(
        (data) => {
          const fetchedImages = data.hits;
          const totalFetchedImages = data.totalHits;
          console.log(fetchedImages);
          console.log(totalFetchedImages);
          if (fetchedImages.length === 0) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...fetchedImages],
            showBtn: currentPage < Math.ceil(totalFetchedImages / ImageAPI.perPage),
            status: 'resolved',
            // currentPage: prevState.currentPage + 1,
          }));
          console.log(this.state.images);
        }
      ).catch(error => {
        this.setState(() => {
          console.log(error);
          return { status: 'rejected' };
        });
      });

      // searchParams.set('q', this.state.searchTag);
      // searchParams.set('page', this.state.currentPage);
      // searchUrl = `${BASE_URL}?${searchParams}`;
      // this.setState({ status: 'pending' });

      // return await fetch(searchUrl)
      //   .then(res => {
      //     return res.json();
      //   })
      //   .then(data => {
      //     console.log(data);
      //     const fetchedImages = data.hits;
      //     const totalFetchedImages = data.totalHits;
      //     const totalPages = Math.ceil(totalFetchedImages / IMAGES_PER_PAGE);
      //     this.setState(prevState => {
      //       const imagesToShow = [...prevState.images, ...fetchedImages];
      //       console.log(imagesToShow);
      //       return {
      //         images: imagesToShow,
      //         status: 'resolved',
      //         totalImages: totalFetchedImages,
      //         totalPages: totalPages,
      //       };
      //     });
      //   })
        // .catch(error => {
        //   this.setState(() => {
        //     console.log(error);
        //     return { status: 'rejected' };
        //   });
        // });
    }
  }

  handleLoadMore = () => {
    console.log('hello');
    // currentPage += 1;
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
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
