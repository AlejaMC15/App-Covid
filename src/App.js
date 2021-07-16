import "./App.css";
import Header from "./components/header";
import CovidApi from "./service/api"

function App() {
  return (
    <div className="App">
      <Header />
      <CovidApi />
    </div>
  );
}

export default App;
