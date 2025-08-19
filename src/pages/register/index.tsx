"use client";

import "@/app/globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registrarUsuario } from "@/services/users_api_routes";

export default function RegisterPage() {
  const rota = useRouter();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    try {
      const response = await registrarUsuario(username, email, password);

      if (!response) throw new Error("Registro falhou");

      if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
      }
      
      if (response.error === "Usuário ou senha inválidos") {
        alert("Usuário ou senha inválidos.");
        return;
      }

      if (response.error === "E-mail já cadastrado") {
        alert("Este e-mail já está em uso.");
        return;
      }

      if (response.error === "Usuário já cadastrado") {
        alert("Este usuário já está em uso.");
        return;
      }

      console.log("Registro bem-sucedido:", response);
      rota.push("/login");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Erro ao registrar usuário. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="bg-slate-700 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">
          Registrar
        </h2>

        <form onSubmit={handleRegister}>
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
              required
              className="w-full px-3 py-2 border border-slate-400 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Digite seu usuário"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-slate-300 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-slate-400 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Digite seu email"
            />
          </div>

          <div className="mb-4">
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
              required
              className="w-full px-3 py-2 border border-slate-400 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-slate-300 mb-2"
              htmlFor="confirm-password"
            >
              Confirme sua senha
            </label>
            <input
              name="confirm-password"
              type="password"
              id="confirm-password"
              required
              className="w-full px-3 py-2 border border-slate-400 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Confirme sua senha"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Registrar
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-400 text-center">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
