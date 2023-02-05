import CarsList from "@/components/templates/CarsList";
import carsData from "@/Data/carsData";

function Sedan() {
    const sedan = carsData.filter(car => car.category === 'sedan')
    console.log(sedan)
    return(
        <div>
            <CarsList data={sedan} />
        </div>
    )
}

export default Sedan;