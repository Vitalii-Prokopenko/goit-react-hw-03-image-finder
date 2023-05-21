import React, { Component } from 'react';
import ImageGallery from './imageGallery';
import SearchBar from './searchBar';
import Button from './button';

class App extends Component {
  state = {
    searchTag: '',
  };

  formSubmitHandler = data => {
    this.setState(() => {
      return { searchTag: data };
    });
  };

  render() {
    return (
      <>
        <SearchBar propOnSubmit={this.formSubmitHandler} />
        <ImageGallery searchTag={this.state.searchTag} />
        <Button />
      </>
    );
  }
}

export default App;
