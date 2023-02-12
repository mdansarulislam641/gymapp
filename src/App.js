import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers";


function App() {
  return (
    <>
    {/* router provider */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
