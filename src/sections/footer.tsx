import { footerLinks, socialMedia } from "@/constants";
import Logo from "../assets/images/header-logo.svg";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-auto my-0 max-w-screen-xl">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="flex gap-4 text-4xl font-bold text-white">
            <img
              className="rounded-full bg-white"
              src={Logo}
              alt="logo"
              width={60}
              height={60}
            />
            <p>All Shoes</p>
          </a>

          <p className="mt-6 text-base leading-7 text-white text-opacity-80 sm:max-w-sm">
            Get shoes ready for this new season at your nearest store. Find your
            perfect size in store. Get rewards.
          </p>

          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map(({ src, alt }) => (
              <div
                key={alt}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                <img src={src} alt={alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-white">
                {title}
              </h4>
              <ul>
                {links.map(({ name, link }) => (
                  <li
                    key={name}
                    className="mt-3 cursor-pointer text-base leading-normal text-white text-opacity-80 hover:text-muted-foreground"
                  >
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white text-opacity-80 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2">
          <Copyright aria-hidden="true" className="m-0 h-5 w-5 rounded-full" />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p className="cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
