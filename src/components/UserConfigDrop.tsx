import { User } from "lucide-react";

interface UserConfigDropProps {
  isOpen: boolean;
  onClickOutside: () => void;
}

export default function UserConfigDrop({ isOpen, onClickOutside }: UserConfigDropProps) {
    return (
        <div className={`absolute right-0 top-15 w-48 bg-slate-800 rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'}`} onClick={onClickOutside}>
            <ul className="py-1">
                <li className="px-4 py-2 text-sm text-slate-50 hover:bg-slate-700 flex flex-row items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <p>Meu Perfil</p>
                </li>
                <li className="px-4 py-2 text-sm text-slate-50 hover:bg-slate-700">Configurações</li>
                <li className="px-4 py-2 text-sm text-slate-50 hover:bg-slate-700">Sair</li>
            </ul>
        </div>
    )
}