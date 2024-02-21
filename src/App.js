import "./App.css";
import { routes } from "./RouteConfig";
import { useRoutes } from "react-router-dom";
function App() {
  const routeConfig = useRoutes(routes);
  return routeConfig;
}
export default App;
