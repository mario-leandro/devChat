import Navigation from "@/components/Navigation";
import Main from "@/components/Main";

export default function Home() {
  return (
    <section className="w-dvw h-dvh display flex justify-center items-center">
      <section className="w-7xl h-11/12 flex justify-start items-start bg-slate-900 rounded-2xl">
        <Navigation />
        <Main />
      </section>
    </section>
  );
}
