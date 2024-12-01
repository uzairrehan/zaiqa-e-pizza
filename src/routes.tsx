import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LayoutPage from "./pages/LayoutPage";
import DetailedContact from "./pages/DetailedContact";
import MainPage from "./pages/MainPage";
import Contacts, { usersLoader } from "./pages/Contacts";
import About from "./pages/About";
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path="" 
    element={<LayoutPage />} 
    errorElement={<NotFound />}
    >

      <Route path="" element={<MainPage />} />

      <Route path="contacts" element={<Contacts />} loader={usersLoader} />

      <Route path="contacts/:contactID" element={<DetailedContact />} />

      <Route path="about" element={<About />} />

    </Route>
  )
);

export default router;

// "Component" jab use karen ge to jsx use nhi karen ge
// "Element" bhi use kar sakte hen



// hum ese bhi use kar sakte hen
// const router = createBrowserRouter([{
//     path:'',
//     Component: LayoutPage,
//     errorElement: <NotFound/>,
//     children:[
//         {
//             path: '',
//             Component: MainPage
//         }
//         ,
//         {
//             path: 'contacts',
//             Component: Contacts
//         }
//         ,
//         {
//             path: 'contacts/:contactID',
//             Component: DetailedContact
//         }
//     ]
// }])
