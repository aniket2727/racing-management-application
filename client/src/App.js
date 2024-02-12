

import LoginComponets from "./componets/authcomponets/LoginComponets";
import RegisterComponets from "./componets/authcomponets/RegisterComponets";
import NavbarComponents from "./componets/header/NavbarComponets";
import HomeComponets from "./componets/Homecomponets/HomeComponets";
import AddCartsComponent from "./componets/craeteevent/AddCartsComponet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarComponents/>
        <Routes>
          <Route path="home" element={<HomeComponets/>} />
          <Route path="login" element={<LoginComponets/>} />
          <Route path="register" element={<RegisterComponets/>}/>
          <Route path="addcart" element={<AddCartsComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
