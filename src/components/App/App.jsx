import "./App.css";

import { fetchImageWithTopic } from "../../galleryApi";

import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImageWithTopic(topic, page);
        const newImages = data.results;
        setImages((prevImages) => {
          return [...prevImages, ...newImages];
        });
        setTotalPage(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [page, topic]);

  const handleSubmit = async (dataSearch) => {
    setTopic(dataSearch);
    setImages([]);
    setPage(1);
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Loader loading={loading} />
      {error ? <ErrorMessage /> : <ImageGallery images={images} />}
      {images.length > 0 && page !== totalPage && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </>
  );
}

export default App;
