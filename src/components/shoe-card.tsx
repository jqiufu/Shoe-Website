import { Shoe } from "@/constants";
import { cn } from "@/lib/utils";

interface ShoeCardProps {
  imgUrl: Shoe;
  changeBigShoeImage: (shoe: string) => void;
  bigShoeImage: string;
}

const ShoeCard = ({
  imgUrl,
  changeBigShoeImage,
  bigShoeImage,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={cn("cursor-pointer rounded-xl border-2 max-sm:flex-1", {
        "border-red-500": bigShoeImage === imgUrl.bigShoe,
      })}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-slate-300 max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={imgUrl.thumbnail}
          alt="Shoes from collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
