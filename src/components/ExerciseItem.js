import { useState } from "react";
import ExerciseDetails from "./ExerciseDetails";

import styles from "./ExerciseItem.module.css";

const ExerciseItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const removeHandler = () => {
    props.onRemove(props.exerciseId);
  };

  const showDetailsHandler = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <li>
      {props.exercideId} {props.name}{" "}
      <button type="button" onClick={removeHandler}>
        REMOVE
      </button>
      <button type="button" onClick={showDetailsHandler}>
        Details
      </button>
      {showDetails && <ExerciseDetails exerciseId={props.exerciseId} />}
    </li>
  );
};

export default ExerciseItem;
