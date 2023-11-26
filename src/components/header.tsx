"use client";
// Import the NavBar component from the specified path
import { NavBar } from "./navbar/NavBar";

// Header component
export function Header() {
  // Render the Header component
  return (
    // Header section with dynamic background classes
    <header className="h-screen bg-hero-mb bg-cover bg-center sm:max-h-[40rem] sm:bg-hero-dt">
      {/* Container for header content */}
      <div className="container relative flex h-full max-w-screen-lg flex-col justify-center p-6 sm:mx-auto">
        {/* Include the NavBar component */}
        <NavBar />

        {/* Content container with flex layout */}
        <div className="my-auto flex max-w-min justify-items-center self-center border p-6 sm:mr-auto">
          {/* Heading with specified styles */}
          <h1 className="font-title text-[2.5rem]/10 font-light uppercase text-white sm:text-5xl">
            Immersive Experiences That Deliver
          </h1>
        </div>
      </div>
    </header>
  );
}
