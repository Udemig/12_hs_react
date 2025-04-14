import Hero from "../components/home/hero";
import Categories from "../components/home/categories";
import Products from "../components/home/products";
export default function Home() {
  return (
    <div className="p-5 md:p-7 lg:px-10">
      <Hero />

      <Categories />

      <Products />
    </div>
  );
}
