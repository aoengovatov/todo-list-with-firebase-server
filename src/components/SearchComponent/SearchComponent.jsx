import styles from './SearchComponent.module.css';

export const SearchComponent = ({ setSearchValue }) => {

    return (
        <>
            <input 
                type="search" 
                placeholder='поиск' 
                className={styles.input} 
                onChange={({target}) => setSearchValue(target.value)}>
            </input>
        </>
    )
}