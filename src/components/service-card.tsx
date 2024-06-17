import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ServiceCardProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  subtext: string;
}

const ServiceCard = ({ icon: Icon, label, subtext }: ServiceCardProps) => {
  return (
    <div className="w-full flex-1 rounded-[20px] px-10 py-16 shadow-2xl sm:w-[350px] sm:min-w-[350px]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500">
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-3xl font-bold leading-normal">{label}</h3>
      <p className="mt-3 break-words text-lg leading-normal text-muted-foreground">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
