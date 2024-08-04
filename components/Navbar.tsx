import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between px-6 sm:px-16 py-4 ">
        <Link href={`/`} className="flex justify-center items-center">
          <Image
            src={`/logo.svg`}
            alt="Car App"
            width={150}
            height={16}
            className="object-contain"
          />
        </Link>

        <PrimaryButton
          type="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        >
          Sign In
        </PrimaryButton>
      </nav>
    </header>
  );
};

export default Navbar;
