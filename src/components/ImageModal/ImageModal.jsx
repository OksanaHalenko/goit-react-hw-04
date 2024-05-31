import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
ReactModal.setAppElement("#root");
function ImageModal({
  modalIsOpen,
  closeModal,
  image: { alt_description, urls },
}) {
  return (
    <ReactModal
      className={css.modalWindow}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <div className={css.wrapper}>
        <img className={css.image} src={urls.regular} alt={alt_description} />
        <div className={css.textWrapper}>
          <h2 className={css.description}>{alt_description}</h2>
        </div>
      </div>
    </ReactModal>
  );
}

export default ImageModal;
