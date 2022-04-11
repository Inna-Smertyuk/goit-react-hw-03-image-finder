import { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = { searchInput: "" };

  imadeChange = (event) => {
    this.setState({ searchInput: event.target.value.toLowerCase() });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.props.onSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            onChange={this.imageChange}
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

export default Searchbar;
