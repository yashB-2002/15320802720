import React, { useEffect, useState } from "react";
import TableComp from "./TableComp";
function HomePage() {
  const [res, setRes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await fetch("http://20.244.56.144/train/trains", {
        method: "GET",
        headers: {
          Authentication:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA1MzU1MzUsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiZTA4YjJjN2QtZjA5YS00MzE3LWEwYjYtNWRjZjFiMzkwZGI1Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjE1MzIwODAyNzIwIn0.zFx2rjo7ontSgrSHdAI0QZ2U4pVjYzbjzfUqiph5rV4",
        },
      });
      const data = await result.json();
      console.log(data);
      setRes(data);
    };
    getData();
  }, []);
  return (
    <div>
      <TableComp res={res} />
    </div>
  );
}

export default HomePage;
