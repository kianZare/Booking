
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header";
import LocationList from "./components/location/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Hotels from "./components/hotels/Hotels";

function App() {
  return (
    <div>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={<LocationList/>}/>
        <Route path="/hotels" element={<AppLayout/>}>
          <Route index element={<Hotels />}/>
          <Route path=":id" element={<div>Single hotel</div>}/>

        </Route>
      </Routes>
      
    </div>
  )
}

export default App;

