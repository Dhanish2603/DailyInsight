import NavBar from "./components/NavBar";
import PageLayout from "./components/Layout/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import BookMarks from "./components/Layout/BookMarks";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "./components/store/context";

axios.defaults.withCredentials = true;

function App() {
  const authCtx = useContext(AuthContext)
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: authCtx.isLoggedIn ?<NavBar />: <SignIn />,
      children: [
        {
          path: "/",
          element: authCtx.isLoggedIn ?<Footer />: <SignIn />,

          children: [
            {
              path: "/",
              element: authCtx.isLoggedIn ?<PageLayout category="general" />: <SignIn />,
            },

            {
              path: "/bookmark",
              element:authCtx.isSignIn ? <BookMarks /> : <SignIn />,
            },
            {
              path: "/technology",
              element: authCtx.isLoggedIn ?<PageLayout category="technology" />: <SignIn />,
            },
            {
              path: "/business",
              element: authCtx.isLoggedIn ?<PageLayout category="business" />: <SignIn />,
            },
            {
              path: "/health",
              element: authCtx.isLoggedIn ?<PageLayout category="health" />: <SignIn />,
            },

            {
              path: "/sports",
              element: authCtx.isLoggedIn ?<PageLayout category="sports" />: <SignIn />,
            },
          ],
        },
      ],
    },
  
    {
      path: "/signin",
      element: authCtx.isSignIn ? <PageLayout category="general" /> : <SignIn />,
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
