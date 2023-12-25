import {
	RootRoute,
	Route,
	Router,
	lazyRouteComponent,
} from "@tanstack/react-router";
import App from "./App";

const rootRoute = new RootRoute({
	component: App,
});

const IndexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/",
	component: lazyRouteComponent(() => import("@falcon-z/app/index.tsx")),
});

const AuthRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/auth",
	component: lazyRouteComponent(() => import("@falcon-z/app/auth/index.tsx")),
});

const routeTree = rootRoute.addChildren([IndexRoute, AuthRoute]);

export const router = new Router({ routeTree });
