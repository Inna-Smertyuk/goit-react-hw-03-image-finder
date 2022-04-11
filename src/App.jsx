import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import api from "./API/api";

class App extends Component {
  state = {
    page: 1,
    img: [],
    modalImg: "",
    searchImage: "",
    loading: false,
    currentPage: null,
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      !this.state.img.length
    ) {
      api(this.state.searchImage, this.state.currentPage)
        .then((img) => {
          this.setState((prevState) => {
            return { img: [...prevState.img, ...img.hits] };
          });
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
    this.handleScroll();
  }
  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  imageSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[1];

    if (value.trim() === "") {
      return alert("Enter a search value...");
    }

    this.setState({
      searchImage: value.toLowerCase(),
      loading: true,
      currentPage: 1,
      img: [],
    });
  };

  loadMore = () => {
    this.setState(({ currentPage }) => ({
      currentPage: currentPage + 1,
      loading: true,
    }));
  };

  openModal = (e) => {
    this.setState({
      isModalOpen: true,
      modalImg: e.target.dataset.source,
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, modalImg: "" });
  };

  render() {
    const { img, loading, currentPage, isModalOpen, modalImg } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.imageSubmit} />
        {img && <ImageGallery images={img} onOpen={this.openModal} />}
        {isModalOpen && (
          <Modal modalImg={modalImg} closeModal={this.handleCloseModal} />
        )}
        {loading && <Loader />}
        {currentPage && <Button onClick={this.loadMore} />}
      </>
    );
  }
}

export default App;
