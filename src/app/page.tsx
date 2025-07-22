import Navigation from "@/components/Navigation";
import Main from "@/components/Main";

export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-row justify-start items-start bg-slate-900">
      <Navigation />
      <Main />
    </section>
  );
}
