import Navbar from "./components/navbar";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="pb-12 sm:pb-24 xl:pl-8 2xl:pr-8">
        <Hero />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <PopularProducts />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <SuperQuality />
      </section>
      <section className="px-8 py-10 sm:px-16">
        <Services />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <SpecialOffer />
      </section>
      <section className="bg-slate-100 px-8 py-12 sm:px-16 sm:py-24">
        <CustomerReviews />
      </section>
      <section className="w-full px-8 py-16 sm:px-16 sm:py-32">
        <Subscribe />
      </section>
      <section className="bg-slate-950 px-8 pb-8 pt-12 sm:px-16 sm:pt-24">
        <Footer />
      </section>
    </main>
  );
};

export default App;
