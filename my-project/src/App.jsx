import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import './App.css'
import NotFound404 from "./Components/NotFound404.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='*' element={<NotFound404 />} />

      </>
    ))

  return (
    <div className="App ">
      <Suspense fallback={"load"}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </div>
  );
}

export default App
