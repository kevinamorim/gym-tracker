import { useState } from "react";

import "./App.css";
import Workout from "./components/Workout";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  const showMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <div className="App">
      <h1>GYM TRACKER</h1>
      {showMenu && (
        <>
          <button type="button" onClick={showMenuHandler}>START</button>
          <button type="button">WORKOUTS</button>
        </>
      )}

      {!showMenu && <Workout />}
    </div>
  );
}

export default App;
