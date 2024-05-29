import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery";

function ImageGallery({ images }) {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        <li className={css.item}>
          <ImageCard image={image} />
        </li>;
      })}
      ;
    </ul>
  );
}

export default ImageGallery;
