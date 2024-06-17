import { Button } from "@/components/ui/button";
import Shoe8 from "../assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="mx-auto my-0 flex w-full max-w-screen-xl items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You <span className="text-red-500">Super</span>{" "}
          <span className="text-red-500">Quality</span> Shoes
        </h2>
        <p className="mt-4 text-lg leading-7 text-muted-foreground lg:max-w-lg">
          We guarantee premium comfort and quality from our selection of shoes.
          Each shoe is crafted to provide you the most stylish designs as well
          as the best footwear experience you can have.
        </p>
        <p className="mt-6 text-lg leading-7 text-muted-foreground lg:max-w-lg">
          Our attention to detail and excellence will ensure your satisfaction.
        </p>
        <div className="mt-11">
          <Button>View details</Button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img
          src={Shoe8}
          alt="Shoe image"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
