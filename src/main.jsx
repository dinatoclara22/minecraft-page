import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login/index.jsx";
import Sobre from "./components/Sobre.jsx";

import "./index.css";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "sobre",
				element: <Sobre />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
