// Importing necessary components and modules
import Image from "next/image";
import { navItems } from "./navbar/NavItems";
import { SocialMediaIcon } from "./social-medias/SocialMediaIcon";
import Link from "next/link";

// Footer component
export function Footer() {
  // Render the Footer component
  return (
    // Footer section with a dark background
    <footer className="mt-16 h-full bg-black">
      {/* Container for the footer content */}
      <div className="container mx-auto flex flex-col items-center gap-10 p-6 sm:grid sm:grid-cols-2 sm:gap-4">
        {/* Logo */}
        <Image src="/images/logo.svg" alt="logo" width={145} height={25} />

        {/* Navigation links */}
        <nav className="sm:row-start-2">
          <ul className="flex flex-col gap-6 text-center text-white sm:flex-row">
            {/* Mapping over navItems to display navigation links */}
            {navItems.map((item) => (
              <li key={item.id} className=" hover:underline">
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social media icons */}
        <div className="flex gap-4 sm:ml-auto">
          {/* Mapping over SocialMediaIcon to display social media icons */}
          {SocialMediaIcon.map(({ src, alt, link }) => (
            <Link legacyBehavior href={link} key={alt}>
              <a className="relative transition-all duration-300 ease-linear hover:bottom-2 hover:-mb-2 hover:border-b-2">
                <Image src={src} alt={alt} width={20} height={20} />
              </a>
            </Link>
          ))}
        </div>

        {/* Copyright notice */}
        <p className="text-center text-xs text-white sm:ml-auto">
          © 2021 Loopstudios. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
