import KeepDescription from "@/components/keep-react/KeepDescription";
import Deals from "@/components/root/content/Deals";
import Destination from "@/components/root/content/Destination";
import Exclusive from "@/components/root/content/Exclusive";
import Featured from "@/components/root/content/Featured";
import QrCodeBanner from "@/components/root/content/QrCodeBanner";
import Footer from "@/components/root/footer/Footer";
import Header from "@/components/root/landing-header/Header";
import { Button } from "keep-react";

export default function Home() {
  return (
    <section className="space-y-5 ">
      <Header />

      <main className="px-10 space-y-12">
        <div className="text-center py-5">
          <KeepDescription>
            Unlock the extraordinary with Trip Beyond, your passport to
            unparalleled adventures. From secluded beaches to majestic peaks,
            our expert team crafts tailor-made journeys that redefine travel.
            Immerse yourself in culture, savor unique experiences, and create
            memories that last a lifetime. Join us and journey beyond the
            ordinary with Trip Beyond.
          </KeepDescription>
          <Button variant="link">Read More</Button>
        </div>

        <Deals />
        <Exclusive />
        <Destination />
        <QrCodeBanner />
        <Featured />
      </main>

      <Footer />
    </section>
  );
}
