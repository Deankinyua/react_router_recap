import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import About from "./pages/About";
import Home from "./pages/Home";

// Layouts
import RootLayout from "./layout/RootLayout";

// Loaders

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
