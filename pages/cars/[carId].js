import { useRouter } from "next/router";
import carsData from "@/Data/carsData";
import CarDetails from "@/components/templates/CarDetails";

function carDetails() {
    const router = useRouter()
    const {carId} = router.query;
    const detail = carsData[carId - 1]
    console.log(detail)
    return <CarDetails {...detail} />
            
}

export default carDetails;