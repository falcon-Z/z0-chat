import { Outlet, useNavigate } from "@tanstack/react-router";
import "./index.css";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect } from "react";
import { user } from "./lib/utils/user";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.is) {
      navigate({ to: "/auth" })
    }
  })

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

export default App;
