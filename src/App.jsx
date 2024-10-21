import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/navbar";
import { News24 } from "./components/News24";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UnderConstruction from "./components/UnderConstruction";
import Technology from "./components/Technology";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <News24 /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<News24 />}>
            {" "}
          </Route>

          <Route path="/about-us" element={<AboutUs />}>
            {" "}
          </Route>

          <Route path="/contact" element={<ContactUs />}>
            {" "}
          </Route>

          <Route path="/under-construction" element={<UnderConstruction />}>
            {" "}
          </Route>

          <Route path="/technology" element={<Technology />}>
            {" "}
          </Route>

          {/* <Route path='/' element={<News24 />}> </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
