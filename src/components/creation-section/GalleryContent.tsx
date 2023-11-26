// Importing twMerge function from tailwind-merge
import { twMerge } from "tailwind-merge";

// Props for the GalleryContent component
interface GalleryContentProp extends React.HTMLProps<HTMLElement> {
  text: string;
}

// GalleryContent component
export function GalleryContent({ text, ...rest }: GalleryContentProp) {
  // Render the GalleryContent component
  return (
    // Paragraph element with added styles
    <p
      className={twMerge(
        "z-10 w-min p-4 font-title text-2xl font-light uppercase text-white group-hover:text-black",
        rest.className,
      )}
    >
      {/* Display the text passed as a prop */}
      {text}
    </p>
  );
}