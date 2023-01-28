import styles from './CarsPages.module.css'

function CarsPages({data}) {
    return(
       <div className={styles.container}>
            {
                data.map(car => <p key={car.id}>{car.name}</p>)
            }      
       </div> 
    )
}

export default CarsPages;