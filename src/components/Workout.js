import { useState } from "react";

import ExerciseItem from "./ExerciseItem";
import NewExercise from "./NewExercise";

import styles from "./Workout.module.css";

const Workout = () => {
  const [exercises, setExercises] = useState([]);

  const [showNewExerciseForm, setShowNewExerciseForm] = useState(false);

  const newExerciseHandler = () => {
    setShowNewExerciseForm((prevState) => !prevState);
  };

  const addExerciseHandler = (name) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises];
      updatedExercises.unshift({ name: name, id: Math.random().toString() });
      return updatedExercises;
    });

    setShowNewExerciseForm(false);
  };

  const removeExerciseHandler = (id) => {
    setExercises((prevExercises) => {
      const updatedExercises = prevExercises.filter(
        (exercise) => exercise.id !== id
      );
      return updatedExercises;
    });
  };

  return (
    <>
      <ul>
        {exercises.map((item) => (
          <ExerciseItem
            key={item.id}
            exerciseId={item.id}
            name={item.name}
            onRemove={removeExerciseHandler}
          />
        ))}
      </ul>
      <button type="button" onClick={newExerciseHandler}>
        New Exercise
      </button>
      {showNewExerciseForm && <NewExercise onAdd={addExerciseHandler} />}
    </>
  );
};

export default Workout;
