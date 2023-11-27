import styles from './DeleteButtonComponent.module.css';

export const DeleteButtonComponent = ({ deleteTodo, id }) => {
   
    return (
        <div className={styles.deleteButton} onClick={() => deleteTodo(id)}>
            <div className={styles.deleteIcon}></div>
        </div>
    )
}