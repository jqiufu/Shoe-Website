import { navLinks } from "../constants";
import HeaderLogo from "../assets/images/header-logo.svg";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full px-8 py-8 sm:px-16">
      <nav className="mx-auto my-0 flex max-w-screen-xl items-center justify-between">
        <a href="/">
          <img src={HeaderLogo} alt="Logo" width={60} height={40} />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className="text-lg leading-normal text-slate-500">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu aria-hidden="true" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              <ul className="mt-10 flex flex-1 flex-col items-center justify-center gap-5">
                {navLinks.map(({ href, label }) => (
                  <li key={label}>
                    <SheetClose asChild>
                      <a
                        href={href}
                        className="text-lg leading-normal text-slate-500"
                      >
                        {label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
