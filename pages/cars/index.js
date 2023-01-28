import CarsPages from "@/components/templates/CarsPages";
import carsData from "@/Data/carsData";

function Details() {
    return(
        <div>
            <CarsPages data={carsData} />
        </div>
    )
}

export default Details;
