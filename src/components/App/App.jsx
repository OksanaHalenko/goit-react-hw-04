import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

function App() {
  const onSubmit = (topic) => {
    console.log(topic);
  };
  return <SearchBar onSubmit={onSubmit} />;
}

export default App;
