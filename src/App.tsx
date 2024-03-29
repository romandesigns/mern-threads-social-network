import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

function App() {
  // Application Routing
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    )
  );
  // Return the RouterProvider with the router
  return <RouterProvider router={router} />;
}

export default App;
