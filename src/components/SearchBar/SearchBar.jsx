import css from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";
function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSubmit(topic);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <IoSearchOutline className={css.icon} />
          <input
            className={css.input}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
