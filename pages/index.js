import carsData from "@/Data/carsData"
import SearchBar from "@/components/module/SearchBar";
import CarsPages from "@/components/templates/CarsPages";
import Categories from "@/components/module/Categories";
import SeeAll from "@/components/module/SeeAll";

export default function Home() {
  const cars = carsData.slice(0 , 3)
  return (
    <div>
      <SearchBar />
      <Categories />
      <SeeAll />
      <CarsPages data={cars} />
    </div>
  )
}
