import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages

// Layouts

// Loaders

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
