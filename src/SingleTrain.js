import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SingleTrain({ query }) {
  const navigate = useNavigate();
  return (
    <>
      <h1>Train Details</h1>
      <div className="outer-container">
        <h4>
          <span>Train Name</span> - {query.trainName}
        </h4>
        <h4>
          <span>Train Number</span> - {query.trainNumber}
        </h4>
        <h4>
          <span>
            Departure Time -
            {query?.departureTime?.Hours +
              "hrs:" +
              query?.departureTime?.Minutes +
              "mins"}
          </span>
        </h4>
        <div className="inner-container">
          <h4>
            <span>Seat Availability</span> -{" "}
          </h4>
          <h4>
            <span>SLEEPER COACH</span> - {query.seatsAvailable.sleeper}{" "}
            Remaining
          </h4>
          <h4>
            <span>AC COACH</span> - {query.seatsAvailable.AC} Remaining
          </h4>
        </div>
        <div className="inner-container">
          <h4>
            <span> Price - </span>
          </h4>
          <h4>
            <span>SLEEPER COACH</span> - ₹{query.price.sleeper}
          </h4>
          <h4>
            <span>AC COACH </span>- ₹{query.price.AC}
          </h4>
        </div>
        <Button className="button" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </div>
    </>
  );
}

export default SingleTrain;
