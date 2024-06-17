import { Button } from "@/components/ui/button";
import Offer from "../assets/images/offer.png";

const SpecialOffer = () => {
  return (
    <section className="mx-auto my-0 flex max-w-screen-xl items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={Offer}
          alt="Offer image"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col max-xl:self-start">
        <h2 className="text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-red-500">Special</span> Offer
        </h2>
        <p className="mt-4 text-lg leading-7 text-muted-foreground lg:max-w-lg">
          Check out our special offers and deals of the season. Get premium
          quality shoes without spending a fortune.
        </p>
        <p className="mt-6 text-lg leading-7 text-muted-foreground lg:max-w-lg">
          Hurry up and don&apos;t miss out!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button>Shop now &rarr;</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
