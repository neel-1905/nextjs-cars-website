"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CarCardProps } from "@/types";
import { calculateCarRent } from "@/utils";
import PrimaryButton from "./PrimaryButton";
import CarDetails from "./CarDetails";

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    combination_mpg,
    year,
    make,
    model,
    transmission,
    drive,
    cylinders,
    displacement,
    fuel_type,
    highway_mpg,
  } = car;

  const [open, setOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-3xl font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-44 my-3 object-contain">
        <Image src={`/hero.png`} fill alt={model} className="px-3" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={`/steering-wheel.svg`}
              width={20}
              height={20}
              alt="Steering Wheel"
            />
            <p className="text-[14px] ">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={`/tire.svg`} width={20} height={20} alt="Tire" />
            <p className="text-[14px] ">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={`/gas.svg`} width={20} height={20} alt="Fuel" />
            <p className="text-[14px] ">{city_mpg}</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <PrimaryButton
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            onClick={() => setOpen(true)}
          >
            View More
          </PrimaryButton>
        </div>
      </div>

      {open ? (
        <CarDetails car={car} closeModal={() => setOpen(false)} isOpen={open} />
      ) : null}
    </div>
  );
};

export default CarCard;
