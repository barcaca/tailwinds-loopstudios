// Import components from the specified paths
import { Creations } from "@/components/creation-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Interactive } from "@/components/interactive-section";

// Default Home component
export default function Home() {
  // Render the Home component
  return (
    <>
      {/* Include the Header component */}
      <Header />

      <main>
        {/* Include the Interactive component */}
        <Interactive />

        {/* Include the Creations component */}
        <Creations />
      </main>

      {/* Include the Footer component */}
      <Footer />
    </>
  );
}
