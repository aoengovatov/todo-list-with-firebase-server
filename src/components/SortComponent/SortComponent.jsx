import styles from './SortComponent.module.css';

export const SortComponent = ({ isSort, setSort }) => {

    return (
        <div className={styles.container}>
            <button 
                className={`${styles.buttonSearch} 
                ${!isSort ? styles.active : ""}`}
                onClick={() => isSort === true ? setSort(false) : false}
            >
                по умолчанию
            </button>
            <button 
                className={`${styles.buttonSearch} 
                ${isSort ? styles.active : ""}`}
                onClick={() => isSort === false ? setSort(true) : false}
            >
                по алфавиту
            </button>
        </div>
    )
}