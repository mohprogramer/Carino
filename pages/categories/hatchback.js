import CarsList from "@/components/templates/CarsList";
import carsData from "@/Data/carsData";

function Hatchback() {
    const hatchback = carsData.filter(car => car.category === 'hatchback')
    return (
        <div>
            <CarsList data={hatchback} />
        </div>
    )
}

export default Hatchback;