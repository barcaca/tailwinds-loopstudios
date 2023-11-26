import React from "react";
import { twMerge } from "tailwind-merge";

// Props for the GalleryRoot component
interface GalleryRootProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

// GalleryRoot component
export function GalleryRoot({ children, ...rest }: GalleryRootProps) {
  // Render the GalleryRoot component
  return (
    // Container for the gallery root, with added styles and hover effects
    <div
      {...rest}
      className={twMerge(
        "group relative flex h-32 cursor-pointer items-end bg-cover bg-center hover:after:absolute hover:after:inset-0 hover:after:block hover:after:bg-white/50 sm:h-96",
        rest.className,
      )}
    >
      {/* Render children within the gallery root container */}
      {children}
    </div>
  );
}
