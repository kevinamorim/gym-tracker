import { useState, useRef } from "react";

const ExerciseDetails = (props) => {
  const [exerciseSets, setExerciseSets] = useState([]);
  const weightInputRef = useRef();
  const repsInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setExerciseSets((prevExerciseSets) => {
      const updatedExerciseSets = [...prevExerciseSets];
      updatedExerciseSets.unshift({
        weight: weightInputRef.current.value,
        reps: repsInputRef.current.value,
      });
      return updatedExerciseSets;
    });
  };

  return (
    <>
      {exerciseSets.map((item) => (
        <li>
          {item.weight} | {item.reps}
        </li>
      ))}
      <form onSubmit={submitHandler}>
        <input type="number" name="weight" placeholder="Weight (KG)" ref={weightInputRef} />
        <input type="number" name="reps" placeholder="Reps" ref={repsInputRef} />
        <button type="submit">Add Set</button>
      </form>
    </>
  );
};

export default ExerciseDetails;
