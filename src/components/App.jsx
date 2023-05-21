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
  page: 1,
  per_page: IMAGES_PER_PAGE,
});

let searchUrl = '';

class App extends Component {
  state = {
    searchTag: '',
    images: [],
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTag !== this.state.searchTag) {
      // console.log(prevProps.searchTag);
      // console.log(this.props.searchTag);

      searchParams.set('q', this.state.searchTag);
      // searchParams.set('page', currentPage);
      searchUrl = `${BASE_URL}?${searchParams}`;
      // console.log(searchUrl);
      this.setState({loading: true});

      return await fetch(searchUrl)
        .then(res => {
          // console.log(res);
          return res.json();
        })
        .then(data => {
          // console.log(data);
          const fetchedImages = data.hits;
          // console.log(fetchedImages);
          this.setState(() => {
            return { images: fetchedImages };
          });
          // console.log(this.state.images);
        })
        .catch(error => console.log(error)).finally(() => this.setState({loading: false}));
    }
  }

  formSubmitHandler = data => {
    this.setState(() => {
      return { searchTag: data };
    });
  };

  render() {
    return (
      <>
        <SearchBar propOnSubmit={this.formSubmitHandler} />
        {this.state.loading && <Loader />}
        <ImageGallery images={this.state.images} />
        <Button />
      </>
    );
  }
}

export default App;
