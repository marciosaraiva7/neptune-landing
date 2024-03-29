import Approuch from "@/components/approach";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Transformation from "@/components/transformation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-8">
      <Banner />
      <Services />
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #86B3FF,#08205E)",
        }}
      >
        <Approuch />
        <Transformation />
        <Contact />
      </div>
    </main>
  );
}
