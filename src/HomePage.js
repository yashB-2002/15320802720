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
            "Bearer {token},
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
