import { Navbar, Typography } from "@material-tailwind/react";
import HeaderLink from "../HeaderLink/HeaderLink";

function NavList() {
  return (
    <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <HeaderLink title="Home" href="/" />
      <HeaderLink title="About" href="/about" />
      <HeaderLink title="Projects" href="/projects" />
      <HeaderLink title="Contact" href="/contact" />
    </div>
  );
}

export default function AppNavbar() {
  return (
    <Navbar className="my-auto mx-auto max-w-screen-2xl px-3 py-6">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 font-black hover:text-tertiary cursor-pointer py-1.5"
        >
          Gerard
        </Typography>
        <div>
          <NavList />
        </div>
      </div>
    </Navbar>
  );
}
