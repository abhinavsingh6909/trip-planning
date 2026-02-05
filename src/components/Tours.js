import { useState } from "react";
import Card from "./Card";

function Tours({ tours, removeTourHandler }) {
  return (
    <div>
      <div>
        <h2>Plan With Abhinav</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour} removeTourHandler={removeTourHandler}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
