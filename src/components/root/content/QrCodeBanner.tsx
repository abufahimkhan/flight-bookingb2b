import React from "react";
import Image from "next/image";
import { images } from "@/interfaces/images";

const QrCodeBanner = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-24 mb-5 px-5 py-2">
      <div className="relative h-40 sm:h-96 rounded-2xl overflow-hidden">
        <Image src={images.QrCode} alt="QR code" className="object-cover" />
      </div>
    </div>
  );
};

export default QrCodeBanner;
