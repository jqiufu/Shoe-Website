import PopularProductCard from "@/components/popular-product-card";
import { products } from "@/constants";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="mx-auto my-0 max-w-screen-xl max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold">
          Most <span className="text-red-500">Popular</span> Products
        </h2>
        <p className="mt-2 text-muted-foreground lg:max-w-lg">
          Check out the best products from our most sought-after selections.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map(({ imgUrl, name, price }) => (
          <PopularProductCard
            key={name}
            name={name}
            imgUrl={imgUrl}
            price={price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
