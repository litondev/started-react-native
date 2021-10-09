import React from "react";

export default [
	{
		name : "Home",
		component : React.lazy(() => import("./views/Home"))
	},
	{
		name : "Dialog",
		component : React.lazy(() => import("./views/Dialog"))
	},
	{
		name : "Axios",
		component : React.lazy(() => import("./views/Axios"))
	},
	{
		name : "Storage",
		component : React.lazy(() => import("./views/Storage"))
	},
	{
		name : "Toaste",
		component : React.lazy(() => import("./views/Toaste")),
	},
	{
		name : "ReactElement",
		component : React.lazy(() => import('./views/ReactElement'))
	},
	{
		name : "Loading",
		component : React.lazy(() => import('./views/Loading'))
	},
	{
		name : "DotEnv",
		component : React.lazy(() => import('./views/DotEnv'))
	},
	{
		name : "Validation",
		component : React.lazy(() => import('./views/Validation'))
	},
	{
		name : "Select",
		component : React.lazy(() => import('./views/Select'))
	}
];