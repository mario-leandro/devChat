import "@/app/globals.css";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-slate-900">
            <div className="bg-slate-700 p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl text-white font-bold mb-6 text-center">Login</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="username">Usuário</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border border-slate-400 rounded focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Digite seu usuário"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-slate-400 rounded focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-sm text-slate-400 text-center">
                    Não tem uma conta?{" "}
                    <Link href="/register" className="text-blue-400 hover:underline">
                        Registrar
                    </Link>
                </div>
            </div>
        </div>
    )
}

