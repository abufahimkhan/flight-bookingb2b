"use client";
import KeepDescription from "@/components/keep-react/KeepDescription";
import KeepHeading from "@/components/keep-react/KeepHeading";
import { images } from "@/interfaces/images";
import { Button } from "keep-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export const dealsData = [
  {
    id: 1,
    title: "10% off",
    description: "with KLM",
    image: images.deal1,
  },
  {
    id: 2,
    title: "Next pocket friendly Trip?",
    description: "Malaysia invites you",
    image: images.deal2,
  },
  {
    id: 3,
    title: "5 star stays",
    description: "are now more affordable",
    image: images.deal3,
  },
  {
    id: 4,
    title: "Deal 4",
    description: "Discount on car rentals for a week.",
    image: images.deal1,
  },
  {
    id: 5,
    title: "Deal 5",
    description: "Exclusive deals on special events tickets.",
    image: images.deal1,
  },
];

const Deals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Tablets and larger devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 mb-8">
      <KeepHeading level="secondary" className="text-center py-2">
        Find Great Deals, Only for you
      </KeepHeading>
      <Slider {...settings}>
        {dealsData.map((deal) => (
          <div key={nanoid()} className="px-2">
            <div className="relative h-56 sm:h-48 rounded-2xl overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.title}
                layout="fill"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 text-white p-4 flex flex-col justify-center">
                <KeepHeading
                  level="primary"
                  className="text-primary-main font-bold"
                >
                  {" "}
                  {deal.title}
                </KeepHeading>
                <KeepDescription level="primary" className="text-white text-lg">
                  {deal.description}
                </KeepDescription>
                <Button className="mt-2 w-28 text-black rounded-2xl">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Deals;
