import { useState } from "react";

function Card({ id, name, info, image, price, removeTourHandler }) {
  const [readmore, setReadMore] = useState(true);

  const description = readmore ? `${info.substring(0, 85)}....` : info;

  function readmoreHandler() {
    setReadMore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} alt="" className="image"></img>
      <div className="tour-box">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="tour-description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? "Read More" : "Show Less"}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTourHandler(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
