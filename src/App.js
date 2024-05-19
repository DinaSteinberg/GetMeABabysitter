import "./App.css";
import Header from "./Header.js";
import Homepage from "./Homepage.js";
import SearchForm from "./SearchForm.jsx";

function App() {
  return (
    <div className="App">
      <SearchForm />

      <Homepage />
    </div>
  );
}

export default App;
