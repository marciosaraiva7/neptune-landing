import Banner from "@/components/banner";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col pt-8">
      <Banner />
      <Services />
    </main>
  );
}
