import NavBar from "./components/NavBar";
import PageLayout from "./components/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import { RequireAuth } from "react-auth-kit";

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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
