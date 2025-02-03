import NavBar from "@/components/NavBar";
import Hero from "./_sections/Hero";
import Products from "./_sections/Products";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <NavBar />
      <Hero />
      <Products />
    </main>
  );
}
