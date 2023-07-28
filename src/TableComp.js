import Table from "react-bootstrap/Table";
import { apidata } from "./apidata";
// import apidata from "./apidata.js";
function BasicExample({}) {
  console.log(apidata);
  return (
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
        {apidata.map((train) => {
          return (
            <tr>
              <td style={{ textAlign: "center" }}>{train.trainName}</td>
              <td style={{ textAlign: "center" }}>{train.trainNumber}</td>
              <td style={{ textAlign: "center" }}>
                {train.departureTime.Hours + ":" + train.departureTime.Minutes}
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
  );
}

export default BasicExample;
