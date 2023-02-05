import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar() {

    const router = useRouter();

    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    
    const searchHandler = (e) => {
        if(min && max) {
            router.push(`/filter/${min}/${max}`)
        } else {
            alert("Enter min and max")
        }
    }
    return(
        <div className={styles.container}>
            <div>
              <input placeholder='Enter min-price' value={min} onChange={e => {setMin(e.target.value)}} />  
              <input placeholder='Enter max-price' value={max} onChange={e => {setMax(e.target.value)}} />  
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    )
}

export default SearchBar;