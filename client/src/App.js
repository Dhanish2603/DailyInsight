import NavBar from "./components/NavBar";
import PageLayout from "./components/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

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
