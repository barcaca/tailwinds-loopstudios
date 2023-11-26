// Import the Image component from Next.js
import Image from "next/image";

// Interactive component
export function Interactive() {
  // Render the Interactive component
  return (
    // Section containing interactive content, spanning the full height of the screen
    <section className="h-screen">
      {/* Container for the interactive content */}
      <div className="container relative mx-auto flex h-full max-w-screen-lg flex-col justify-center gap-10  p-6">
        {/* Mobile image display (hidden on larger screens) */}
        <Image
          className="sm:hidden"
          src="/images/mobile/image-interactive.jpg"
          alt="Interactive VR"
          width={650}
          height={450}
        />

        {/* Desktop image display (hidden on smaller screens) */}
        <Image
          className="hidden sm:block"
          src="/images/desktop/image-interactive.jpg"
          alt="Interactive VR"
          width={650}
          height={500}
        />

        {/* Text content displayed on the right side for larger screens */}
        <div className="flex flex-col gap-5 bg-white text-center sm:absolute sm:right-0 sm:ml-auto sm:max-w-md sm:translate-y-1/3 sm:py-8 sm:pl-6 sm:text-left md:py-16 md:pl-12">
          {/* Title */}
          <h2 className="font-title text-4xl font-light uppercase">
            The Leader in Interactive VR
          </h2>

          {/* Description */}
          <p className="px-4 sm:px-0">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
