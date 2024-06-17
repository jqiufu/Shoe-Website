import ServiceCard from "@/components/service-card";
import { HeartHandshake, LucideProps, ShieldCheck, Truck } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Services {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  label: string;
  subtext: string;
}

const services: Services[] = [
  {
    icon: Truck,
    label: "Free shipping",
    subtext: "Get your shoes delivered to your home with no extra cost!",
  },
  {
    icon: ShieldCheck,
    label: "Secure Payment",
    subtext:
      "We offer a variety of secure payment options.",
  },
  {
    icon: HeartHandshake,
    label: "Here to helop",
    subtext: "We have a dedicated team to assist you in anything you need.",
  },
];

const Services = () => {
  return (
    <section className="mx-auto my-0 flex max-w-screen-xl flex-wrap justify-center gap-9">
      {services.map(({ icon, label, subtext }) => (
        <ServiceCard key={label} icon={icon} label={label} subtext={subtext} />
      ))}
    </section>
  );
};

export default Services;
