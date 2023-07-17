import MainPage from "../pages/MainPage";
import CreatePage from "../pages/CreatePage";
import UpdatePage from "../pages/UpdatePage";
const routes = [
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <CreatePage />,
    path: "/create",
  },
  {
    element: <UpdatePage />,
    path: "/update/:todoId",
  },
];
export default routes;
