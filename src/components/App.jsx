import React, { Component } from 'react';
import ImageGallery from './imageGallery';
import SearchBar from './searchBar';
import Button from './button';

class App extends Component {
  render() {
    return (
      <>
        {/* <div
          style={{
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React homework template
        </div> */}
        <SearchBar />
        <ImageGallery />
        <Button />
      </>
    );
  }
}

export default App;
