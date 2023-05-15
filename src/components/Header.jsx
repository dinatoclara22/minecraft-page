import Link from "./Link";

export default function Header() {
	return (
		<header className="flex flex-col justify-center items-center pt-11">
			<img src="./assets/logo-with-text.svg" alt="" />
			<nav className="mt-11">
				<ul className="flex gap-6 list-none text-white">
					<li>
						<Link text="ENTRAR" href="#" />
					</li>
					<li>
						<Link text="FORUM" href="#" />
					</li>
					<li>
						<Link text="SOBRE" href="#" />
					</li>
					<li>
						<Link text="MOJANG" href="#" />
					</li>
					<li>
						<Link text="PERGUNTAS" href="#" />
					</li>
				</ul>
			</nav>
		</header>
	);
}
