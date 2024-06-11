import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Help/Contact";
import Faq from "./pages/Help/Faq";

// Layouts
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";

// Loaders

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="faq" element={<Faq />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
