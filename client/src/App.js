

import LoginComponets from "./componets/authcomponets/LoginComponets";
import RegisterComponets from "./componets/authcomponets/RegisterComponets";
import NavbarComponents from "./componets/header/NavbarComponets";
import HomeComponets from "./componets/Homecomponets/HomeComponets";
import AddCartsComponent from "./componets/craeteevent/AddCartsComponet";
import FirstRoundComponet from "./componets/selection/FirstRoundComponet";
import SemifinalsComponets from "./componets/selection/SemifinalsComponets";
import FinalComponets from "./componets/selection/FinalComponet";
import UserprofileComponet from "./componets/userprofile/UserprofileComponet";
import Searchprofile from "./componets/userprofile/Searchprofile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <BrowserRouter>
      <NavbarComponents/>
        <Routes>
          <Route path="/home" element={<HomeComponets/>} />
          <Route path="/login" element={<LoginComponets/>} />
          <Route path="/register" element={<RegisterComponets/>}/>
          <Route path="/addcart" element={<AddCartsComponent/>}/>
          <Route path="/first-round" element={<FirstRoundComponet/>}/>
          <Route path="/semi-finals" element={<SemifinalsComponets/>}/>
          <Route path="/finals" element={<FinalComponets/>}/>
          <Route path="/profile" element={<UserprofileComponet/>}/>
          <Route path="/userprofile" element={<Searchprofile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
