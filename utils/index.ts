import { CarType, FilterProps } from "@/types";

const headers = {
  "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
  "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
};

export async function fetchCars(filters: FilterProps) {
  const { fuel, limit, manufacturer, model, year } = filters;
  try {
    const response = await fetch(
      `${process.env
        .NEXT_PUBLIC_BASE_URL!}/cars?maker=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
      {
        method: "GET",
        headers,
      }
    );
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const generateCarImages = async (car: CarType, angle?: string) => {};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPath = `${window.location.pathname}?${searchParams.toString()}`;

  return newPath;
};
