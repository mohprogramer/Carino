import { useRouter } from "next/router";
import carsData from "@/Data/carsData";

function carDetails() {
    const router = useRouter()
    const {carId} = router.query;
    const detail = carsData[carId - 1]
    console.log(detail)
    return(
        <div>
        </div>
    )
}

export default carDetails;