// Importing components related to the creation section
import { GalleryContent } from "./creation-section/GalleryContent";
import { GalleryItems } from "./creation-section/GalleryItems";
import { GalleryOverlay } from "./creation-section/GalleryOverlay";
import { Gallery } from "./creation-section/Index";

// Creations component
export function Creations() {
  // Render the Creations component
  return (
    // Section containing creation content, spanning the full height of the container
    <section className="h-full">
      {/* Container for the creation content */}
      <div className="container mx-auto grid h-full max-w-screen-lg gap-6 p-6 sm:grid-cols-2">
        {/* Title */}
        <h2 className="text-center font-title text-4xl font-light uppercase sm:text-left">
          Our Creations
        </h2>

        {/* "See All" button */}
        <button
          className="row-start-3 mx-auto border border-black px-8 py-2 uppercase tracking-widest hover:bg-black hover:text-white sm:col-start-2 sm:row-start-1 sm:ml-auto sm:mr-0"
          type="button"
        >
          See All
        </button>

        {/* Gallery of creations */}
        <div className="flex flex-col gap-6 sm:col-span-2 sm:grid sm:grid-cols-4">
          {/* Mapping over GalleryItems to display individual creations */}
          {GalleryItems.map(({ className, text }) => (
            // Gallery item with overlay and content
            <Gallery.Root key={text} className={className}>
              <GalleryOverlay className="bg-gradient-to-r sm:bg-gradient-to-t" />
              <GalleryContent text={text} className="w-40" />
            </Gallery.Root>
          ))}
        </div>
      </div>
    </section>
  );
}
