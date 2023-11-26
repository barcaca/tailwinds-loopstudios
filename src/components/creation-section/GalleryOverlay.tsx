// Importing twMerge function from tailwind-merge
import { twMerge } from "tailwind-merge";

// GalleryOverlay component
export function GalleryOverlay({ ...rest }) {
  // Render the GalleryOverlay component
  return (
    // Overlay element with added styles
    <span
      className={twMerge(
        "absolute top-0 h-full w-full from-black/80",
        rest.className,
      )}
    ></span>
  );
}
