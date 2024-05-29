import "./App.css";

import { fetchImageWithTopic } from "../../galleryApi";

import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      setLoading(true);
      setError(false);
      const data = await fetchImageWithTopic(topic);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Loader loading={loading} />
      {error ? <ErrorMessage /> : <ImageGallery images={images} />}
    </>
  );
}

export default App;
