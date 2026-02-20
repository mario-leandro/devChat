"use client";
import { useState } from "react";
import { MessageSquare, NotebookTabs, Settings } from "lucide-react";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("conversas");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="w-full h-full bg-slate-800 flex sm:hidden flex-row justify-between items-center gap-4 px-4">
      <span
        className={`w-1/3 h-full flex flex-col justify-center items-center text-sm text-slate-50 transition-all ${activeTab === "conversas" ? "bg-slate-700" : ""}`}
        onClick={() => handleTabClick("conversas")}
      >
        <MessageSquare size={18} />
        Conversas
      </span>
      <span
        className={`w-1/3 h-full flex flex-col justify-center items-center text-sm text-slate-50 transition-all ${activeTab === "contatos" ? "bg-slate-700" : ""}`}
        onClick={() => handleTabClick("contatos")}
      >
        <NotebookTabs size={18} />
        Contatos
      </span>
      <span
        className={`w-1/3 h-full flex flex-col justify-center items-center text-sm text-slate-50 transition-all ${activeTab === "configuracoes" ? "bg-slate-700" : ""}`}
        onClick={() => handleTabClick("configuracoes")}
      >
        <Settings size={18} />
        Configurações
      </span>
    </section>
  );
}
