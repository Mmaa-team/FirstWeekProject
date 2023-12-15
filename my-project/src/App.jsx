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

const Statistics=lazy (()=>import("./components/Statistics.jsx"))
// About Page:
const About = lazy(() => import("./components/pages/About.jsx"))
// const Signin = lazy(() => import("./components/auth/signin.jsx"))
const Signin = lazy(() => import("./components/auth/signin.jsx"))
function App() {
  // console.log(process.env.APIKEY,"envvvv");
  // console.log(process.env.APIKEY,"envvvv");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='*' element={<NotFound404 />} />
        <Route path="/" element={<Layout />}>
          <Route path="/About" element={<About />} />
          <Route path="/statistic" element={<Statistics />} />
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
