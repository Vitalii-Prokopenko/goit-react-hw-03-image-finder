import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import css from 'components/searchBar/search-bar.module.css';

const INITIAL_STATE = {
  searchTag: '',
};

class SearchBar extends Component {
  state = {
    searchTag: '',
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    console.log(name);
    console.log(value);
    
    this.setState({
      [name]: value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.inputTag);
    if (this.state.searchTag.toString().trim() === '') {
      alert('Input word for search');
      return;
    }
    this.props.propOnSubmit(this.state.searchTag);
    this.reset();
  };

  render() {
    return (
      <header className={css['search-bar']}>
        <form className={css['form']} onSubmit={this.handleSubmit}>
          <button type="submit" className={css['button']}>
            <BsSearch />
            {/* <span className={css['button-label']}>Search</span> */}
          </button>

          <input
            className={css['input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            name="searchTag"
            value={this.state.searchTag}
          />
        </form>
      </header>
    );
  }
}
// const SearchBar = () => (
//   <header className={css['search-bar']}>
//     <form className={css['form']}>
//       <button type="submit" className={css['button']}>
//         <span className={css['button-label']}>Search</span>
//       </button>

//       <input
//         className={css['input']}
//         type="text"
//         autocomplete="off"
//         autofocus
//         placeholder="Search images and photos"
//       />
//     </form>
//   </header>
// );

// SearchBar.propTypes = {
// onSubmit : PropTypes.func.isRequired,
// };

export default SearchBar;
