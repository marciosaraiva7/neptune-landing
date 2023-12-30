import Approuch from "@/components/approach";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Transformation from "@/components/transformation";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col pt-8">
      <Banner />
      <Services />
      <Approuch />
      <Transformation />
      <Contact />
    </main>
  );
}
