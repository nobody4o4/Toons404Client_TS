import CardGrid from "@/components/CardGrid";
import Category from "@/components/Home/Category";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div
      className="bg-background text-text
     "
    >
      <Hero />
      <Category />
      <CardGrid />
      <CardGrid />
    </div>
  );
}
