import Location from '../icons/Location';
import Company from '../icons/Company';
import Model from '../icons/Model';
import Road from '../icons/Road';
import Money from '../icons/Money';
import Calender from '../icons/Calender';
import styles from './CarDetails.module.css'

function CarDetails(props) {
    const {id , name , image , price , model , distance , location , year , description} = props;
    return(
        <div className={styles.container}>
            <img src={image} alt={name} />
            <h3 className={styles.header} >{name} {model}</h3>
            <div className={styles.details}>
                <div>
                    <Company />
                    <p>Company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <Model />
                    <p>Model</p>
                    <span>{model}</span>
                </div>
                <div>
                    <Calender />
                    <p>First registration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <Road />
                    <p>kms driven</p>
                    <span>{distance}</span>
                </div>
            </div>
            <div className={styles.details}>
                <div>
                    <Location />
                    <p>location</p>
                    <span>{location}</span>
                </div>
            </div>
            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra informations</p>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                    <Money />
                    <p>Price</p>
                    <span>{price}</span>
                </div>
            </div>
            <button className={styles.button}>Buy</button>
        </div>
    )
}

export default CarDetails;