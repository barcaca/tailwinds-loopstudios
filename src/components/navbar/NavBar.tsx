// Import the useState hook from React
import { useState } from "react";

// Import the Image component from Next.js
import Image from "next/image";

// Import the array of navigation items
import { navItems } from "./NavItems";

// NavBar component
export function NavBar() {
  // State to manage the visibility of the mobile navigation menu
  const [navbar, setNavBar] = useState(false);

  // Render the NavBar component
  return (
    // Container for the navbar with dynamic classes based on state
    <div
      className={`flex w-auto items-center justify-between ${
        navbar ? "fixed top-6 z-20 w-[90%]" : "relative"
      }`}
    >
      {/* Logo */}
      <Image
        className="z-10"
        src="/images/logo.svg"
        alt="logo"
        width={145}
        height={25}
      />

      {/* Button to toggle the mobile navigation menu */}
      <button className="z-10" onClick={() => setNavBar(!navbar)}>
        <Image
          className="h-5 w-6 sm:hidden "
          src={navbar ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
          alt="menu icon"
          width={24}
          height={20}
        />
      </button>

      {/* Desktop navigation menu */}
      <nav className="hidden sm:block">
        <ul className="flex gap-8 text-white">
          {navItems.map((item) => (
            <li key={item.id} className="hover:underline">
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile navigation menu */}
      <nav
        className={`fixed left-0 top-0 h-screen w-screen bg-black transition duration-200 ease-linear sm:hidden ${
          navbar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-8 p-6  font-title text-2xl font-light uppercase text-white">
          {navItems.map((item) => (
            <li key={item.id} className="hover:underline">
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
