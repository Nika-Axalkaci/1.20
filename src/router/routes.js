import MainPage from "../pages/MainPage";
import CreatePage from "../pages/CreatePage";
import TodoContextPorvider from "../contexts/TodoContext";
import UpdatePage from "../pages/UpdatePage";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import ThemeContextProvider from "../contexts/ThemeContext";
import LanguageContextProvider from "../contexts/LanguageProvider";
const routes = [
  {
    element: (
      <>
        <ThemeContextProvider>
        <LanguageContextProvider>
          <Header />,
          <Outlet />

        </LanguageContextProvider>
        </ThemeContextProvider>
      </>
    ),
    path: "/",
    children: [
      {
        element: (
          <div>
            <TodoContextPorvider>
              <MainPage />
            </TodoContextPorvider>
          </div>
        ),
        index: true,
      },
      {
        element: <CreatePage />,
        path: "create",
      },
      {
        element: <UpdatePage />,
        path: "update/:todoId",
      },
    ],
  },
];
export default routes;
