
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header";
import LocationList from "./components/location/LocationList";

function App() {
  return (
    <div>
      <Toaster/>
      <Header/>
      <LocationList/>
    </div>
  )
}

export default App;

