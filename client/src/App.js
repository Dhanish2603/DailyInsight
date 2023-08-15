import NavBar from "./components/NavBar";
import PageLayout from "./components/Layout/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import BookMarks from "./components/Layout/Bookmarks";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "./store/context";
axios.defaults.withCredentials = true;

function App() {
  const ctx = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: ctx.isSignIn ? <NavBar /> : <SignIn />,
      children: [
        {
          path: "/",
          element: ctx.isSignIn ? <Footer /> : <SignIn />,

          children: [
            {
              path: "/",
              element: ctx.isSignIn ? (
                <PageLayout category="general" />
              ) : (
                <SignIn />
              ),
            },

            {
              path: "/bookmark",
              element: ctx.isSignIn ? <BookMarks /> : <SignIn />,
            },
            {
              path: "/technology",
              element: ctx.isSignIn ? (
                <PageLayout category="technology" />
              ) : (
                <SignIn />
              ),
            },
            {
              path: "/business",
              element: ctx.isSignIn ? (
                <PageLayout category="business" />
              ) : (
                <SignIn />
              ),
            },
            {
              path: "/health",
              element: ctx.isSignIn ? (
                <PageLayout category="health" />
              ) : (
                <SignIn />
              ),
            },

            {
              path: "/sports",
              element: ctx.isSignIn ? (
                <PageLayout category="sports" />
              ) : (
                <SignIn />
              ),
            },
          ],
        },
      ],
    },
  
    {
      path: "/signin",
      element: ctx.isSignIn ? <PageLayout /> : <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
