import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPages from "@/components/templates/CarsPages";
import carsData from "@/Data/carsData";

function Details() {
    return(
        <div>
            <SearchBar />
            <Categories />
            <CarsPages data={carsData} />
        </div>
    )
}

export default Details;
