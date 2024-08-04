import { ComponentProps, ReactNode } from "react";

export type SearchManufacturerType = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};

export type PrimaryButtonTypes = {
  children: ReactNode;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
} & ComponentProps<"button">;

export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type CarCardProps = {
  car: CarType;
};

export type CarDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
};

export type FilterProps = {
  model: string;
  year: number;
  fuel: string;
  limit: number;
  manufacturer: string;
  pageNumber?: number;
};

export type Option = {
  title: string;
  value: string;
};

export type FilterType = {
  title: string;
  options: Option[];
};

export type ShowMoreType = {
  pageNumber: number;
  isNext: boolean;
};
