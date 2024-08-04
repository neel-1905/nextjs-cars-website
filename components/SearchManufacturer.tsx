"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";

import { manufacturers } from "@/constants";
import { SearchManufacturerType } from "@/types";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerType) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxInput
            className={`search-manufacturer__input`}
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Volkswagen"
          />
          <ComboboxButton className="absolute left-0 top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </ComboboxButton>
        </div>

        <Transition
          as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ComboboxOptions
            anchor="bottom"
            transition
            className="absolute  mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border"
          >
            {filteredManufacturers.length > 0 ? (
              filteredManufacturers.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  // className={`search-manufacturer__option`}
                  className={({ selected }) =>
                    `relative search-manufacturer__option ${
                      selected ? "bg-primary-blue text-white" : "text-black"
                    }`
                  }
                >
                  {item}
                </ComboboxOption>
              ))
            ) : (
              <div>No data found!</div>
            )}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
