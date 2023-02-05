import { useRouter } from "next/router";
import carsData from "@/Data/carsData";
import CarsList from "@/components/templates/CarsList";

function FilterCars() {
    const router = useRouter();
    const [min , max] = router.query.slug || [];
    const cars = carsData.filter(car => car.price > min && car.price < max)
    if(cars.length === 0)
        return <h3>Not founded</h3>
    return(
        <div>
                <CarsList data={cars} />            
        </div>
    )
}

export default FilterCars;