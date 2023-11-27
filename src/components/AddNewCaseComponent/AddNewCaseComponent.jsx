import styles from './AddNewCaseComponent.module.css';
import { useState } from 'react';

export const AddNewCaseComponent = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const onChange = ({target}) => {
        setValue(target.value);
    }

    const onSubmit = (target) => {
        target.preventDefault();
        addTodo(value);
        setValue('');
    }

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <input type='text' value={value} onChange={onChange} className={styles.input} placeholder='Новая задача'></input>
            <button className={styles.buttonAdd} type='submit'>добавить</button>
        </form>
    )
}