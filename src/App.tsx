import { Outlet } from "@tanstack/react-router";
import "./index.css";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function App() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

export default App;
