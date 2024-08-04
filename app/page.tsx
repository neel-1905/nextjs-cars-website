import {
  CarCard,
  Filter,
  HeroSection,
  SearchBar,
  ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { CarType, FilterProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  const cars = await fetchCars({
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    year: searchParams.year || 2022,
  });

  const isDataEmpty = !Array.isArray(cars) || cars.length <= 0 || !cars;

  return (
    <main className="overflow-hidden">
      <HeroSection />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>

          <p>Explore cars you like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <Filter title="Fuel" options={fuels} />
            <Filter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car: CarType, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No results</h2>
            <p>{cars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
