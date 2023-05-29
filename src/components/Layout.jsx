import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className="bg-[url('/assets/wallpaper.png')] min-h-screen bg-center bg-no-repeat bg-cover shadow-innerShadow flex flex-col items-center justify-around sm:gap">
			<Header />
			<Outlet />
			<Footer />
		</div>
	); 
}