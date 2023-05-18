import React, { Component } from 'react';
import ImageGallery from './imageGallery';
import SearchBar from './searchBar';
import Button from './button';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '30578820-1c894d3db344c99ef40fa5cf7';
// const IMAGES_PER_PAGE = 12;

// const searchParams = new URLSearchParams({
//   key: API_KEY,
//   q: '',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   // safesearch: true,
//   page: 1,
//   per_page: IMAGES_PER_PAGE,
// });

// let searchUrl = '';

class App extends Component {
  state = {
    searchTag: '',
    images: null,
  };

  // componentDidMount() {
  //   const { searchTag } = this.state;
  //   searchParams.set('q', searchTag);
  //   // searchParams.set('page', currentPage);
  
  //   searchUrl = `${BASE_URL}?${searchParams}`;
  //   console.log(searchUrl);


  //   fetch(searchUrl).then(response => response.json())
  //     .then(data => this.setState(() => { return {images: data }}))
  //     .catch(error => console.log(error));
  //     console.log(this.state.images);
  // }

  formSubmitHandler = data => {
    this.setState(() => {
      return { searchTag: data };
    });
  };

  render() {
    return (
      <>
        <SearchBar propOnSubmit={this.formSubmitHandler} />
        <ImageGallery searchTag={this.state.searchTag}/>
        <Button />
      </>
    );
  }
}

export default App;
