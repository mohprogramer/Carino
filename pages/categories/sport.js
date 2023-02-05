import carsData from "@/Data/carsData";
import CarsList from "@/components/templates/CarsList";

function Sport() {
    const sport = carsData.filter(car => car.category === 'sport')
    return(
        <div>
            <CarsList data={sport} />
        </div>
    )
}

export default Sport;