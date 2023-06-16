import DrinkCard from "@/components/DrinkCard";
import Navbar from "@/components/Navbar";
import { drinkList } from "@/drink";
import Footer from "@/components/Footer";

export default function Menu() {
  return (
    <div>
      <Navbar />
      <section className="mt-14 md:mt-32 flex flex-col items-center">
        <h2 className="font-bold text-4xl text-base-sub-title">Our Menu</h2>
        <div className="mt-12 grid mb-14 mx-8 lg:mx-28 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {drinkList.map((list) => {
            return <DrinkCard key={list.id} drink={list} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
