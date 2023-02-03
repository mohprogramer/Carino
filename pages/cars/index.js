import Categories from "@/components/module/Categories";
import CarsPages from "@/components/templates/CarsPages";
import carsData from "@/Data/carsData";

function Details() {
    return(
        <div>
            <Categories />
            <CarsPages data={carsData} />
        </div>
    )
}

export default Details;
