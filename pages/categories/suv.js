import carsData from "@/Data/carsData";
import CarsList from "@/components/templates/CarsList";

function Suv() {
    const suv = carsData.filter(car => car.category === 'suv')
    return(
        <div>
            <CarsList data={suv} />
        </div>
    )
}

export default Suv;