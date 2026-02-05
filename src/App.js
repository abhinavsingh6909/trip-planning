import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTourHandler(id) {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  }

  return (
    <div>
      <Tours tours={tours}> </Tours>
    </div>
  );
};

export default App;
