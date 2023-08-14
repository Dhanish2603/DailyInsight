import NavBar from "./components/NavBar";
import PageLayout from "./components/LayOut/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import { RequireAuth } from "react-auth-kit";
import Bookmarks from "./components/LayOut/Bookmarks";
import { Fragment } from "react";

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
              element: (
                <RequireAuth loginPath="/signin">
                  <PageLayout category="general" />
                </RequireAuth>
              ),
            },

            {
              path: "/bookmark",
              element: (
                <RequireAuth loginPath="/signin">
                  <Bookmarks />
                </RequireAuth>
              ),
            },
            {
              path: "/technology",
              element: (
                <RequireAuth loginPath="/signin">
                  <PageLayout category="technology" />
                </RequireAuth>
              ),
            },
            {
              path: "/business",
              element: (
                <RequireAuth loginPath="/signin">
                  <PageLayout category="business" />
                </RequireAuth>
              ),
            },
            {
              path: "/health",
              element: (
                <RequireAuth loginPath="/signin">
                  <PageLayout category="health" />
                </RequireAuth>
              ),
            },

            {
              path: "/sports",
              element: (
                <RequireAuth loginPath="/signin">
                  <PageLayout category="sports" />
                </RequireAuth>
              ),
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
        <RouterProvider router={router} /> 
      
  );
}

export default App;
