import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import { lazy, Suspense } from "react";


import Layout from "./components/Layout/Layout.jsx"
import NotFound404 from "./Components/NotFound404.jsx";
const Signup = lazy(() => import("./components/auth/signup.jsx"))
const Signin=lazy(() => import("./components/auth/signin.jsx"))
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='*' element={<NotFound404 />} />
        <Route path="/" element={<Layout />}>
        </Route>
        <Route path="/signup" element={< Signup />} />
        <Route path="/signin" element={< Signin />} />
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
