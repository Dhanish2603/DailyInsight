import NavBar from "./components/NavBar";
import PageLayout from "./components/LayOut/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import BookMarks from "./components/LayOut/Bookmark";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "./components/store/context";
import Auth from "./components/Authentication/Auth";

axios.defaults.withCredentials = 'include';

function App() {
  const authCtx = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <Footer />,

          children: [
            {
              path: "/",
              element: <PageLayout category="general" />,
            },

            {
              path: "/bookmark",
              element: authCtx.isLoggedIn ? <BookMarks /> : <Auth />,
            },

            {
              path: "/technology",
              element: <PageLayout category="technology" />,
            },
            {
              path: "/business",
              element: <PageLayout category="business" />,
            },
            {
              path: "/health",
              element: <PageLayout category="health" />,
            },

            {
              path: "/sports",
              element: <PageLayout category="sports" />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
