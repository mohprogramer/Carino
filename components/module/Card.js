import styles from './Card.module.css'
import Location from '../icons/Location';
import Link from 'next/link';

function Card(props) {
    const {id , name , image , price , model , distance , location , year} = props 
    return(
            <Link href={`/cars/${id}`}>
                <div className={styles.container}>
                    <img src={image} alt="car" className={styles.image} />
                    <h4 className={styles.title}>{`${name} ${model}`}</h4>
                    <p className={styles.detail}>{`${year} . ${distance}km`}</p>
                    <div className={styles.footer}>
                        <p>$ {price}</p>
                        <div className={styles.location}>
                            <p>{location}</p>
                            <Location />
                        </div>
                    </div>
                </div>
        </Link>
    )
}

export default Card;