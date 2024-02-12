

import LoginComponets from "./componets/authcomponets/LoginComponets";
import RegisterComponets from "./componets/authcomponets/RegisterComponets";
import NavbarComponents from "./componets/header/NavbarComponets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarComponents/>
        <Routes>
          <Route path="login" element={<LoginComponets/>} />
          <Route path="register" element={<RegisterComponets/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
