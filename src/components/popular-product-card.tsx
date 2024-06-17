import { Star } from "lucide-react";

interface PopularProductCardProps {
  imgUrl: string;
  name: string;
  price: string;
}

const PopularProductCard = ({
  imgUrl,
  name,
  price,
}: PopularProductCardProps) => {
  return (
    <div className="flex w-full flex-1 flex-col">
      <img
        src={imgUrl}
        alt={name}
        className="h-[280px] w-[280px] bg-violet-100"
      />

      <div className="mt-4 flex justify-start gap-2.5">
        <Star aria-hidden="true" className="fill-orange-500 stroke-0" />
        <p className="text-xl leading-normal text-muted-foreground">(4.5)</p>
      </div>

      <h3 className="mt-2 text-2xl font-semibold leading-normal">{name}</h3>
      <p className="mt-2 text-2xl font-semibold leading-normal text-red-500">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
