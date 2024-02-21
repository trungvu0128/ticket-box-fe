import Main from "./Main";
import { Home } from "./contents/Home";
import { LiveShowDetail } from "./contents/LiveShowDetails/LiveShowDetail";
import { Login } from "./contents/Logins/LoginLayout";

export const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/live-show/:id",
        element: <LiveShowDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
