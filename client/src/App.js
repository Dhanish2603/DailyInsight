import NavBar from "./components/NavBar";
import PageLayout from "./components/Layout/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import BookMarks from "./components/Layout/BookMarks";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
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
              element: <BookMarks />,
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
    {
      path: "/signin",
      element: <SignIn />,
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
