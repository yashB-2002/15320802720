import Table from "react-bootstrap/Table";
import { apidata } from "./apidata";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
function BasicExample() {
  const [res, setRes] = useState(apidata);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const handleclick1 = () => {
    setState1(true);
  };
  const handleclick2 = () => {
    setState2(true);
  };
  const handleclick3 = () => {
    setState3(true);
  };
  const handleclick4 = () => {
    setState4(true);
  };

  useEffect(() => {
    if (state1) {
      setRes(
        apidata.sort((a, b) => {
          return a.price.sleeper - b.price.sleeper;
        })
      );
      setState1(!state1);
    }
    if (state2) {
      setRes(
        apidata.sort((a, b) => {
          return b.price.sleeper - a.price.sleeper;
        })
      );
      setState2(!state2);
    }
    if (state3) {
      setRes(
        apidata.sort((a, b) => {
          return b.price.sleeper - a.price.sleeper;
        })
      );
      setState3(!state3);
    }
    if (state4) {
      setRes(
        apidata.sort((a, b) => {
          return a.price.sleeper - b.price.sleeper;
        })
      );
      setState4(!state4);
    }
  }, [state1, state2, state3, state4]);
  return (
    <>
      <div className="main">
        <Button className="btn" onClick={handleclick1}>
          Sort Based on Price(Low-To-High)
        </Button>
        <Button onClick={handleclick2}>Sort Based on Price(High-To-Low)</Button>
        <Button onClick={handleclick3}>
          Sort Based on Seats Availability(High-To-Low)
        </Button>
        <Button onClick={handleclick4}>
          Sort Based on Seats Availability(Low-To-High)
        </Button>
      </div>
      <Table striped bordered hover>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>trainName</th>
            <th>trainNumber</th>
            <th>Departure Time</th>
            <th>Seats Available</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {res.map((train) => {
            return (
              <tr>
                <td style={{ textAlign: "center" }}>{train.trainName}</td>
                <td style={{ textAlign: "center" }}>{train.trainNumber}</td>
                <td style={{ textAlign: "center" }}>
                  {train?.departureTime?.Hours +
                    ":" +
                    train?.departureTime?.Minutes}
                </td>
                <td style={{ textAlign: "center" }}>
                  {train.seatsAvailable.sleeper +
                    "(SLEEPER COACH)" +
                    "  AND  " +
                    train.seatsAvailable.AC +
                    "(AC COACH)"}
                </td>
                <td style={{ textAlign: "center" }}>
                  {train.price.sleeper +
                    "(SLEEPER COACH)" +
                    "  AND  " +
                    train.price.AC +
                    "(AC COACH)"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default BasicExample;
