import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Subscribe = () => {
  return (
    <section
      className="mx-auto my-0 flex max-w-screen-xl items-center justify-between gap-10 max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="text-4xl font-bold leading-10 lg:max-w-md">
        Sign Up For <span className="text-red-500">Updates</span> & Newsletter
      </h3>

      <div className="flex w-full items-center gap-5 rounded p-2.5 max-sm:flex-col lg:max-w-[40%]">
        <Input type="email" placeholder="subscribe@allshoes.com" />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button>Sign Up</Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
