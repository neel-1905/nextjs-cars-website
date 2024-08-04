"use client";

import Image from "next/image";

import PrimaryButton from "./PrimaryButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-20 lg:pt-24 xl:pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Drive Your Journey with Ease - Affordable Car Rentals at Your
          Fingertips
        </p>

        <PrimaryButton
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          onClick={handleScroll}
        >
          Explore Cars
        </PrimaryButton>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
