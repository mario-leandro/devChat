import Navigation from "@/components/Navigation";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="w-[70vw] h-[70vh] container flex justify-start items-start bg-slate-50">
      <Navigation />
      <Main />
    </div>
  );
}
