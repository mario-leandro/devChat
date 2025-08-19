import "@/app/globals.css";
import Link from "next/link";
import { logarUsuario } from "@/services/users_api_routes";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const rota = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      const response = await logarUsuario(username, password);
      console.log(response);

      if (!response) {
        throw new Error("Login falhou");
      } else if (!username && !password) {
        throw alert("Preencha os campos");
      } else if (username && !password) {
        throw alert("Preencha a senha");
      } else if (!username && password) {
        throw alert("Preencha o usuário");
      } else {
        console.log("Login bem-sucedido:", response);
        // Aqui você pode salvar o ID do usuário no localStorage ou context
        // localStorage.setItem("userId", response.id);
      }

      rota.push("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="bg-slate-700 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-slate-300 mb-2"
              htmlFor="username"
            >
              Usuário
            </label>
            <input
              name="username"
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-slate-400 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Digite seu usuário"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-slate-300 mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              name="password"
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
  );
}
