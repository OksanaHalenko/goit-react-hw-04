import css from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </div>
  );
}

export default ErrorMessage;
