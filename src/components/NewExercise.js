import { useRef } from 'react';

import styles from './NewExercise.module.css';

const NewExercise = (props) => {

    const nameInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;

        if (enteredName.trim() === "") return;
        
        nameInputRef.current.value = "";

        props.onAdd(enteredName);
    };

    return (<form onSubmit={submitHandler}>
        <input ref={nameInputRef} type="text" name="name" placeholder="Name..."/>
        <button type="submit">Add</button>
    </form>);
};

export default NewExercise;