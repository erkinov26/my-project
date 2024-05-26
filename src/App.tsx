import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import Provider from "./Provider/Provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import AllBooks from "./Pages/AllBooks/AllBooks";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path:"/books",
      element:<AllBooks />
    }
  ]);
  return (
    <Provider>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
