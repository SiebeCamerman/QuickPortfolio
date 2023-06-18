import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {  useState } from "react";

let spaceInvadersClicked = 0

function spaceInvaders() {
  if (spaceInvadersClicked < 10) {
    spaceInvadersClicked += 1
  } 
  else{
    spaceInvadersClicked = 0
    window.location.href = '/spaceInvaders';
  }
}

const NavBar = () => {

  const [mobileNav, setMobileNav] = useState(false);

  function toggleMobile() {
    setMobileNav(!mobileNav);
  }


  return (
    <nav className="bg-dinocream">
      <div className="max-w-screen mx-auto pl-10 sm:px-16 lg:px-28">
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <Link href="/">
              <a className="lg:ml-24 py-6 px-11 bg-dinoblack shadow-glow">
                <Image
                  src="/images/logo.png"
                  alt="Dino Logo"
                  width={100}
                  height={100}
                  onClick={spaceInvaders}
                />
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-1 font-heading text-2xl text-dinoblack">
            <NavItem name="Home" href="/" />
            <NavItem name="About" href="/aboutMe" />
            <NavItem name="Projects" href="/projects" />
            <NavItem name="Contact" href="/contact" />
            {/* <Link href="/inquiryPortal" passHref>
              <a className="rounded-full border-2 border-dinoblack px-5  hover:border-tmorange dark:hover:border-coffeegreen">
                Login
              </a>
            </Link> */}
          </div>
          <div className="lg:hidden flex items-center px-3 pr-5">
            <button className="mobile-menu-button" onClick={toggleMobile}>
              <Icon className="w-16 h-16" icon="charm:menu-hamburger" />
            </button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className={`mobile-menu ${mobileNav ? "" : "hidden"}`}>
          <NavItem name="Home" href="/" mobile={true} />
          <NavItem name="About" href="/aboutMe" mobile={true} />
          <NavItem name="Projects" href="/projects" mobile={true} />
          <NavItem name="Contact" href="/contact" mobile={true} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
