import styles from './EditButtonComponent.module.css';

export const EditButtonComponent = ({ editTodo }) => {
    return (
        <div className={styles.editButton} onClick={editTodo}>
            <div className={styles.editIcon}></div>
        </div>
    )
}