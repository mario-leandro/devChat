import { Mic, Plus, SendHorizonal, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Main() {
  return (
    <main className="w-full h-full flex flex-col">
      {/* User info section */}
      <section className="w-full h-25 bg-slate-800 flex flex-row justify-start items-center">
        {/* user avatar section */}
        <section className="w-20 h-full flex justify-center items-center gap-2">
          <User className="w-9 h-full text-slate-400" />
          {/* User avatar */}
        </section>

        {/* name and time of the last message */}
        <section className="w-auto h-full flex flex-col justify-center items-start">
          {/* username section */}
          <section className="w-auto h-auto flex justify-start items-center">
            <span className="text-base text-slate-50">Mario Leandro</span>
            {/* Username */}
          </section>

          {/* here is the status: last seen, online, typing  */}
          <section className="w-auto h-auto flex justify-start items-center">
            <span className="text-xs text-slate-50">
              Visto por último hoje às 16:51
            </span>
            {/* Status */}
            {/* <span>Online</span> */} {/* Online */}
            {/* <span>Digitando...</span> */} {/* Typing */}
          </section>
        </section>
      </section>

      {/* Here is the chat */}
      <section className="w-full h-200/200 bg-slate-900 flex flex-col justify-end px-5 py-2">
        {/* 
            Here we will do something like this:
            Split the "chat" section  in 2 parts, the first will contain the user's messages on the right side.
            The second part will be from the other user who will send a response on the left side.
        */}

        {/* 
          This section create a separate sections using display grid with rows for make a sequential line to messages, this might work
        */}

        {/* 
          Received messages will be on the left side
        */}
        <section className="w-full h-min flex flex-col justify-end items-start">
          <span className="min-w-10 min-h-10 mb-3 flex justify-center items-center bg-slate-600 rounded-2xl">
            <p>Oi</p>
          </span>
        </section>

        {/* 
          Sent messages will be on the right side
        */}
        <section className="w-full h-min flex flex-col justify-end items-end">
          <span className="min-w-10 min-h-10 mb-3 flex justify-center items-center bg-slate-600 rounded-2xl">
            <p>Olá</p>
          </span>
        </section>
      </section>

      <form className="w-full h-25 bg-slate-800 flex flex-row justify-center items-center">
        {/* Here will be button for send a image, document, file, or whatever */}
        <section className="w-16 h-full flex justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="size-10 cursor-pointer flex justify-center items-center hover:bg-slate-700 rounded-full transition-all outline-0">
                <Plus width={50} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Anexar</DropdownMenuLabel>
                <DropdownMenuItem>Documentos</DropdownMenuItem>
                <DropdownMenuItem>Fotos</DropdownMenuItem>
                <DropdownMenuItem>Áudio</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        <section className="w-full h-full flex justify-center items-center">
          <input
            className="w-full h-12 text-base bg-slate-700 rounded-2xl outline-0 px-3 py-0.5 cursor-text"
            type="text"
            autoComplete="off"
            placeholder="Digite uma mensagem"
            name="message"
            id="message"
          />
        </section>

        {/* Here will be button for record the audio */}
        <section className="w-16 h-full flex justify-center items-center">
          {/* This button will have a function of recording audio for another user */}
          <button className="size-10 cursor-pointer justify-center items-center hidden">
            <Mic />
          </button>

          {/* This button have a function  */}
          <button className="size-10 cursor-pointer flex justify-center items-center bg-green-500 rounded-full hover:bg-green-600">
            <SendHorizonal />
          </button>
        </section>
      </form>
    </main>
  );
}
