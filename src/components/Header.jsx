import Anchor from "./Link";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}

	return (
		<>
			<header className="w-full flex items-center md:gap-6 md:flex-col">
				<div className="w-full flex justify-around">
					<Link to="/">
						<img src="./assets/logo-with-text.svg" alt="" className="" />
					</Link>

					<button className="block sm:hidden" onClick={toggleMenu}>
						<img src="/assets/menu-hamburguer.svg" alt="Menu Hamburguer" />
					</button>
				</div>

				<nav className="" id="menu-hamburguer">
					<ul
						className="hidden sm:flex gap-2 flex-wrap justify-center list-none text-white data-[open=true]:flex mb-5"
						data-open={menuOpen}
					>
						<li>
							<Link to="/login">
								<Anchor text="ENTRAR" />
							</Link>
						</li>
						<li>
							<Link to="/sobre">
								<Anchor text="SOBRE" />
							</Link>
						</li>
						<li>
							<Anchor text="FORUM" href="https://www.minecraftforum.net/" />
						</li>
						<li>
							<Anchor text="MOJANG" href="https://www.minecraft.net/pt-pt" />
						</li>
						<li>
							<Anchor
								text="COMUNIDADE"
								href="https://www.minecraft.net/pt-pt/community"
							/>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
