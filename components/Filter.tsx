"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { FilterType, Option } from "@/types";
import { updateSearchParams } from "@/utils";

const Filter = (props: FilterType) => {
  const { title, options } = props;
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const updateParams = (e: Option) => {
    const newPath = updateSearchParams(
      title.toLowerCase(),
      e.value.toLowerCase()
    );

    router.push(newPath, { scroll: false });
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          updateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className={`custom-filter__btn`}>
            <span className="block truncate">{selected.title}</span>
            <Image
              src={`/chevron-up-down.svg`}
              width={20}
              height={20}
              alt="Chevron up down"
              className="ml-4 object-contain"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave={`transition ease-in duration-100`}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className={`custom-filter__options`}>
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option}
                  className={`relative cursor-default select-none py-2 px-4 `}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium " : " font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Filter;
