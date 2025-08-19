export const criarMensagem = async (mensagem: string) => {
  try {
    const response = await fetch("/messages/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mensagem),
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Erro ao criar mensagem");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar mensagem:", error);
    throw error;
  } finally {
    console.log("Requisição para criar mensagem concluída.");
  }
};

export const listarMensagens = async () => {
  try {
    const response = await fetch("/messages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Erro ao listar mensagens");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao listar mensagens:", error);
    throw error;
  } finally {
    console.log("Requisição para listar mensagens concluída.");
  }
};

export const obterMensagem = async (id: string) => {
  try {
    const response = await fetch(`/messages/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Erro ao obter mensagem");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter mensagem:", error);
    throw error;
  } finally {
    console.log("Requisição para obter mensagem concluída.");
  }
};

export const deletarMensagem = async (id: string) => {
  try {
    const response = await fetch(`/messages/delete/${id}`, {
      method: "DELETE",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar mensagem");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao deletar mensagem:", error);
    throw error;
  } finally {
    console.log("Requisição para deletar mensagem concluída.");
  }
};

export const atualizarMensagem = async (id: string, mensagem: string) => {
  try {
    const response = await fetch(`/messages/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mensagem),
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar mensagem");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar mensagem:", error);
    throw error;
  } finally {
    console.log("Requisição para atualizar mensagem concluída.");
  }
};
