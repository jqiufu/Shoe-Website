import { Star } from "lucide-react";

interface ReviewCardProps {
  imgUrl: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({
  imgUrl,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgUrl}
        alt="customer"
        width={120}
        height={120}
        className="rounded-full object-cover"
      />
      <p className="mt-6 max-w-sm text-center text-lg leading-7 text-muted-foreground">
        {feedback}
      </p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <Star
          aria-hidden="true"
          className="m-0 h-6 w-6 fill-orange-500 stroke-orange-500"
        />
        <p className="text-xl text-muted-foreground">({rating})</p>
      </div>
      <h3 className="mt-1 text-center text-3xl font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
