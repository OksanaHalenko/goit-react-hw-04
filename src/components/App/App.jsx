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

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImageWithTopic(topic, page);
        setImages(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [page, topic]);

  const handleSubmit = async (dataSearch) => {
    setImages([]);
    setTopic(dataSearch);
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Loader loading={loading} />
      {error ? <ErrorMessage /> : <ImageGallery images={images} />}
      <LoadMoreBtn onLoadMore={handleLoadMore} />
    </>
  );
}

export default App;
