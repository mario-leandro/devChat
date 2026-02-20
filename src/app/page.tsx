import Navigation from "@/components/Navigation";
import Main from "@/components/Main";
import TabNavigation from "@/components/TabNavigation";

export default function Home() {
  return (
    <section className="w-screen h-screen grid sm:grid-cols-[365px_1fr] grid-cols-1 sm:grid-rows-1 grid-rows-[1fr_60px] justify-start items-start bg-slate-900">
      <Navigation />
      <Main />
      <TabNavigation />
    </section>
  );
}
