import React, { Component } from 'react';
import css from 'components/searchBar/search-bar.module.css';

class SearchBar extends Component {
  render() {
    return (
      <header className={css['search-bar']}>
        <form className={css['form']}>
          <button type="submit" className={css['button']}>
            <span className={css['button-label']}>Search</span>
          </button>

          <input
            className={css['input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
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
