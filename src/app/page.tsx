import Navigation from "@/components/Navigation";
import Main from "@/components/Main";

export default function Home() {
  return (
    <section className="w-screen h-screen display flex justify-center items-center">
      <section className="max-w-7xl h-[85%]">
        <section className="w-full h-full flex justify-start items-start bg-slate-900 rounded-2xl">
          <Navigation />
          <Main />
        </section>
      </section>
    </section>
  );
}
