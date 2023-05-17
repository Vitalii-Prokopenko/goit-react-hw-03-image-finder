import React, { Component } from 'react';
import ImageGallery from './imageGallery';
import SearchBar from './searchBar';
import Button from './button';

const API_KEY = '30578820-1c894d3db344c99ef40fa5cf7';

class App extends Component {
  state = {
    searchTag: '',
  };

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=${this.state.searchTag}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {response.json()})
      .then(data => {console.log(data)})
      .catch(error => {console.log(error)});
  }

  formSubmitHandler = data => {
    console.log(data);
    this.setState(() => {
      return {
        searchTag: data,
      };
    });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery />
        <Button />
      </>
    );
  }
}

export default App;
