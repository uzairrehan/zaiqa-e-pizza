import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>zaiqa e pizza</title>
        <link rel="icon" href="logoo.png!sw800" />
      </Helmet>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
