import Input from "./Input";

export default function Login() {
	return (
		<form className="w-[450px] bg-zinc-900/70 backdrop-blur-sm flex flex-col gap-5 py-6 px-11 rounded-lg">
			<img className="w-10 mx-auto" src="/assets/logo.svg" alt="" />

			<div className="flex flex-col gap-3">
				<Input
					id="email"
					text="E-mail"
					type="email"
					placeholder="exemplo@mail.com"
				/>
				<Input
					id="password"
					text="Senha"
					type="password"
					placeholder="123456"
				/>
			</div>

			<div>
				<Input type="checkbox" className="mr-2" />

				<label htmlFor="checkbox" className="text-white cursor-pointer">
					Lembrar minha senha
				</label>
			</div>

			<button className="bg-green-400 text-white font-kufam text-lg font-medium py-2 px-20 rounded-md shadow-md border-b-2 mt-4">
				Entrar na conta
			</button>

			<a
				href="#"
				className="text-light-green pt-3 text-center hover:text-green-700"
			>
				Esqueceu sua senha?
			</a>
		</form>
	);
}
