import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>zaiqa e pizza</title>
        <link rel="icon" href="logoo.png" />
      </Helmet>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
