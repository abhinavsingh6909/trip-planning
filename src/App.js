import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTourHandler(id) {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2 className="">No Tours Left</h2>
        <button
          onClick={() => {
            setTours(data);
          }}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTourHandler={removeTourHandler}></Tours>
    </div>
  );
};

export default App;
