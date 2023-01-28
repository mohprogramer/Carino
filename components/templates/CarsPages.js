import Card from '../module/Card';
import styles from './CarsPages.module.css'

function CarsPages({data}) {
    return(
       <div className={styles.container}>
            {
                data.map(car => 
                    <Card key={car.id} {...car} />
                    )
            }      
       </div> 
    )
}

export default CarsPages;