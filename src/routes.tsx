import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage";
import Contacts from "./pages/contacts";
import NotFound from "./pages/NotFound";
import LayoutPage from "./pages/LayoutPage";


const router = createBrowserRouter([{
    path:'',
    Component: LayoutPage,
    errorElement: <NotFound/>,
    children:[
        {
            path: '',
            Component: MainPage
        }
        ,
        {
            path: 'contacts',
            Component: Contacts
        }
    ]
}])

export default router;



// "Component" jab use karen ge to jsx use nhi karen ge
// "Element" bhi use kar sakte hen
