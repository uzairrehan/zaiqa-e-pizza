import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LayoutPage from "./pages/LayoutPage";
import MainPage from "./pages/MainPage";
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path="" 
    element={<LayoutPage />} 
    errorElement={<NotFound />}
    >

      <Route index={true} element={<MainPage />} />




    </Route>
  )
);

export default router;


