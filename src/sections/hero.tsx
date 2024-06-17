import { Button } from "@/components/ui/button";
import { shoes, statistics } from "@/constants";
import BigShoe1 from "../assets/images/big-shoe1.png";
import ShoeCard from "@/components/shoe-card";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(BigShoe1);

  return (
    <section
      id="home"
      className="mx-auto my-0 flex min-h-screen w-full max-w-screen-xl flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="relative flex w-full flex-col items-start justify-start px-8 pt-28 sm:max-xl:py-24 xl:w-2/5">
        <h1 className="text-6xl font-bold sm:text-7xl">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-background">
            New Arrivals From
          </span>
          <br />
          <span className="mt-3 inline-block text-red-500">All Shoes</span>
        </h1>
        <p className="mb-14 mt-6 text-lg leading-8 text-muted-foreground sm:max-w-sm">
          New stylish arrivals that will level up your shoe game.
        </p>
        <Button>Shop Now &rarr;</Button>

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold">{value}</p>
              <p className="leading-7 text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex h-full flex-1 items-start justify-center bg-violet-100 py-40">
        <img
          src={bigShoeImage}
          alt="Shoe from collection"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />

        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe: string) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
