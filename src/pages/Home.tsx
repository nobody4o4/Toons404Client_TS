import CardGrid from "@/components/CardGrid";
import Category from "@/components/Home/Category";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-stone-200 ">
      <Hero />
      <Category />
      <CardGrid />
      <CardGrid />
    </div>
  );
}
