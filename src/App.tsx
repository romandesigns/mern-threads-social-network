// Router Dependencies
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// Main Layout
import { MainLayout } from "./components/MainLayout";
// Pages
import User from "./pages/User";
import Post from "./pages/Post";

function App() {
  // Application Routing
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="/:username" element={<User />} />
        <Route path="/:username/post/:pid" element={<Post />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    )
  );
  // Return the RouterProvider with the router
  return <RouterProvider router={router} />;
}

export default App;
