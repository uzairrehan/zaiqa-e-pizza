import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LayoutPage from "./pages/LayoutPage";
// import DetailedContact, { userDetailsLoader } from "./pages/DetailedContact";
import MainPage from "./pages/MainPage";
// import Contacts, { usersLoader } from "./pages/Contacts";
// import About from "./pages/About";
// import UserNotFound from "./pages/UserNotFound";
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path="" 
    element={<LayoutPage />} 
    errorElement={<NotFound />}
    >

      <Route index={true} element={<MainPage />} />

      {/* <Route path="contacts" element={<Contacts />} loader={usersLoader} /> */}

      {/* <Route path="contacts/:contactID" element={<DetailedContact />} loader={userDetailsLoader} errorElement={<UserNotFound/>}/> */}

      {/* <Route path="about" element={<About />} /> */}

    </Route>
  )
);

export default router;

// "Component" jab use karen ge to jsx use nhi karen ge
// "Element" bhi use kar sakte hen
// using "index={true}" is a better way to define home page as compared to " path="" "


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
