"use client";

import React, { FormEvent, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherStyles }: { otherStyles?: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherStyles}`}>
    <Image
      src={`/magnifying-glass.svg`}
      alt="Search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" || model === "") {
      return alert("Search is empty");
    }

    updateParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else searchParams.delete("model");

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else searchParams.delete("manufacturer");

    const newPath = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPath, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton otherStyles="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src={`/model-icon.png`}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Car model"
        />

        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Vento"
          className="searchbar__input"
        />

        <SearchButton otherStyles="sm:hidden" />
      </div>
      <SearchButton otherStyles="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
