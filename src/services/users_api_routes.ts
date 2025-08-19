export const pegarUsuarios = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/users/auth/check-users");

    if (!response.ok) {
      throw new Error("Erro ao pegar usuários");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao pegar usuários:", error);
    throw error;
  } finally {
    console.log("Requisição para pegar usuários concluída.");
  }
};

export const registrarUsuario = async (username: string, email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8080/api/users/auth/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Erro ao criar usuário");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  } finally {
    console.log("Requisição para criar usuário concluída.");
  }
};

export const logarUsuario = async (username: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8080/api/users/auth/logar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      mode: "cors",
    });
    
    if (!response.ok) {
      console.log("Resposta não OK:", response.status);
      throw new Error("Erro ao logar usuário");
    }

    if (response.status === 401) {
      throw new Error("Usuário ou senha inválidos");
    }

    if (response.status === 404) {
      throw new Error("Usuário não encontrado");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    throw error;
  } finally {
    console.log("Requisição para logar usuário concluída.");
  }
}