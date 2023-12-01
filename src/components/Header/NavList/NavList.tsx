import { HeaderLink } from "../..";

export default function NavList() {
  return (
    <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <HeaderLink title="Home" href="/" />
      <HeaderLink title="About" href="/about" />
      <HeaderLink title="Projects" href="/projects" />
      <HeaderLink title="Contact" href="/contact" />
    </div>
  );
}
