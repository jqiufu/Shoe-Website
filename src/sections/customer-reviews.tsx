import ReviewCard from "@/components/review-card";
import { reviews } from "@/constants";

const CustomerReviews = () => {
  return (
    <section className="mx-auto my-0 max-w-screen-xl">
      <h3 className="text-center text-4xl font-bold">
        What Our <span className="text-red-500">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center text-lg leading-7 text-muted-foreground">
        Hear what other customers have to say about their experiences with us!
      </p>

      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map(({ imgUrl, customerName, rating, feedback }) => (
          <ReviewCard
            key={customerName}
            imgUrl={imgUrl}
            customerName={customerName}
            rating={rating}
            feedback={feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
